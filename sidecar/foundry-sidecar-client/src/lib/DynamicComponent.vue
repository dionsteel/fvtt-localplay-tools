<script lang="ts">
import { compile, watch, h, camelize, RenderFunction, VNodeChild, computed, capitalize } from "vue";
import markdown from "markdown-it";
// import uuidlinker from "./uuid-linker";
import markdownItRegex from "markdown-it-regex";
import UUIDLink from "./UUIDLink.vue";
import FoundryLink from "./FoundryLink.vue";
import Formula from "./Formula.vue";

export default {
  components: {
    UUIDLink,
    FoundryLink,
    Formula,
  },
  props: {
    html: {
      type: String,
      default: "",
    },
  },
  // data() {
  //   return { templateRender: undefined } as { templateRender?: Function };
  // },
  // watch: {
  //   html(to) {
  //     this.updateRender();
  //   },
  // },
  setup(props, context) {
    const md = markdown({ html: true });
    md.use(markdownItRegex, {
      name: "uuid",
      regex: /(@UUID\[[^\]]+\]\{[^\}]+\})/,
      replace: (match: string) => {
        let matches = match.match(/@UUID\[([^\]]+)\](\{([^\}]+)\})*/) || [];
        let [all, target, _wrap, label] = matches;
        let [id, item_type, ...item_pack] = target.split(".").reverse();
        let [pack_type, pack_prefix, pack_name] = item_pack.reverse();
        let details = {
          target,
          label,
          id,
          item_type,
          pack_type,
          pack_prefix,
          pack_name,
        };
        let attrs = Object.entries(details)
          .filter(([k, v]) => !!v)
          .map(([k, v]) => `${k}="${v}"`)
          .join(" ");
        // .reduce((a, [k, v]: [string, any]) => {
        //   a[k] = v;
        //   return a;
        // }, {} as any);
        console.log("found uuidlink", match, matches);
        return `<UUIDLink ${attrs}></UUIDLink>`;
      },
    });
    md.use(markdownItRegex, {
      name: "compendium-link",
      regex: /(@Compendium\[[^\]]+\]\{[^\}]+\})/,
      replace: (match: string) => {
        let matches = match.match(/@Compendium\[([^\]]+)\](\{([^\}]+)\})*/im) || [];
        let [all, target, _wrap, label] = matches;
        let [id, ...item_pack] = target.split(".").reverse();
        item_pack = item_pack.reverse();
        let details = {
          target,
          label,
          id,
          pack: item_pack.join("."),
        };
        let attrs = Object.entries(details)
          .filter(([k, v]) => !!v)
          .map(([k, v]) => `${k}="${v}"`)
          .join(" ");
        // .reduce((a, [k, v]: [string, any]) => {
        //   a[k] = v;
        //   return a;
        // }, {} as any);
        console.log("found compendium link", match, matches);
        return `<UUIDLink ${attrs}></UUIDLink>`;
      },
    });
    md.use(markdownItRegex, {
      name: "foundry-toggle",
      regex: /(@toggle\w+\[[^\]]+\])/i,
      replace: (match: string) => {
        let matches = match.match(/@toggle(\w+)\[([^\]]+)\](\{([^\}]+)\})*/) || [];
        let [all, link_type, target, _wrap, label] = matches;
        // let [id, ...item_pack] = target.split(".").reverse();
        // item_pack = item_pack.reverse();
        let details = {
          target,
          label,
          // id,
          // pack: item_pack.join("."),
        };
        let elementTag = capitalize(link_type);
        let attrs = Object.entries(details)
          .filter(([k, v]) => !!v)
          .map(([k, v]) => `${k}="${v}"`)
          .join(" ");
        // .reduce((a, [k, v]: [string, any]) => {
        //   a[k] = v;
        //   return a;
        // }, {} as any);
        console.log("found embedded link", elementTag, match, matches);
        return `<FoundryLink link-type="${elementTag}" ${attrs}></FoundryLink>`;
      },
    });
    md.use(markdownItRegex, {
      name: "chatcommand",
      regex: /\[\[([^\]]+)\]\]/,
      replace: (cmd: string) => `<Formula style="border: 1px solid #333;" formula="${cmd}" class="formula"></Formula>`,
    });
    // return (...a) => (compile(props.html, {}) as any)(...a);
    let contents: RenderFunction = compile(md.renderInline(props.html));
    let compiled = (...args: any[]) => {
      if (contents && typeof contents == "function") {
        return (contents as any)(...args);
      }
      return h("div", ["Loading..."]);
    }; // = compile(props.html || "",{});
    watch(
      () => props.html,
      () => {
        contents = compile(md.renderInline(props.html || ""));
        // console.log("update compiled template", props.html, compiled, contents);
      }
      // { immediate: true }
    );
    // console.log("Dynamic Template Renderer", props.html, context, compiled, contents);
    return compiled;
  },
  // created() {
  //   this.updateRender();
  // },
  // methods: {
  //   updateRender() {
  //     const compiled = compile(this.html);
  //     this.templateRender = compiled;//.render;
  //     // this.$options.staticRenderFns = [];
  //     // for (const staticRenderFunction of compiled.staticRenderFns) {
  //     //   this.$options.staticRenderFns.push(staticRenderFunction);
  //     // }
  //   },
  // },
  // render() {
  //   return typeof this.templateRender !== "undefined" ? this.templateRender() : "";
  // },
};
</script>
