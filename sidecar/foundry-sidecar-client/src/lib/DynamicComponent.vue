<script lang="ts">
import { compile, watch, h, camelize, RenderFunction, VNodeChild, computed, capitalize } from "vue";
import markdown from "markdown-it";
// import uuidlinker from "./uuid-linker";
import markdownItRegex from "markdown-it-regex";
import UUIDLink from "./UUIDLink.vue";
import FoundryLink from "./FoundryLink.vue";
import Formula from "./Formula.vue";
import { useConfigStore } from "@/store/config";

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
    const store = useConfigStore();

    // md.use(markdownItRegex, {
    //   name: 'image-source',
    //   regex: /\<img src=".*"\/\>/gi,
    //   replace: (image: string) => {
    //     try {
    //       console.log('replace image url', image);
    //       const [a, newUrl] = image.match(/src="([^\"]+)"/) || []
    //       console.log('replace image url', image, newUrl, a);
    //       return `src="${image.replace(/src=\"([^"]+])\"/i, (a, u) => `src="${store.getAPIUrl(u)}"`)} title="edited"`;
    //     } catch (e) {
    //       console.error('image rename error. ', image, e);
    //       return 'pox';
    //     }
    //   }
    // });

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
        // console.log("found uuidlink", match, matches);
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
        // console.log("found compendium link", match, matches);
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
        // console.log("found embedded link", elementTag, match, matches);
        return `<FoundryLink link-type="${elementTag}" ${attrs}></FoundryLink>`;
      },
    });
    md.use(markdownItRegex, {
      name: "foundry-check",
      regex: /(\@Check\[.+\])/,
      replace: (match: string) => {
        let matches = match.match(/\@(Check)\[(.+)\]([^\s])*/) || [];
        let [all, link_type, target, _wrap, label] = matches;
        let details = {
          target,
          label,
        };
        let elementTag = link_type || ""; // capitalize(link_type);
        let attrs = Object.entries(details)
          .filter(([k, v]) => !!v)
          .map(([k, v]) => `${k}="${v}"`)
          .join(" ");
        // console.log("found embedded check roll", elementTag, match, matches);
        return `<FoundryLink link-type="${elementTag}" ${attrs}></FoundryLink>`;
      },
    });
    md.use(markdownItRegex, {
      name: "foundry-damage",
      regex: /(\@Damage\[.+\])/,
      replace: (match: string) => {
        let matches = match.match(/@(Damage)\[(.+)\]([^\s])*/) || [];
        let [all, link_type, target, _wrap, label] = matches;
        let details = {
          target,
          label,
        };
        let elementTag = link_type || ""; // capitalize(link_type);
        let attrs = Object.entries(details)
          .filter(([k, v]) => !!v)
          .map(([k, v]) => `${k}="${v}"`)
          .join(" ");
        // console.log("found embedded roll link", elementTag, match, matches);
        return `<FoundryLink link-type="${elementTag}" ${attrs}></FoundryLink>`;
      },
    });
    md.use(markdownItRegex, {
      name: "foundry-attack",
      regex: /(\@Attack\[.+\])/,
      replace: (match: string) => {
        let matches = match.match(/@(Attack)\[(.+)\](\{([^\}]+)\})*/) || [];
        let [all, link_type, target, _wrap, label] = matches;
        let details = {
          target,
          label,
        };
        let elementTag = link_type || ""; // capitalize(link_type);
        let attrs = Object.entries(details)
          .filter(([k, v]) => !!v)
          .map(([k, v]) => `${k}="${v}"`)
          .join(" ");
        // console.log("found embedded roll link", elementTag, match, matches);
        return `<FoundryLink link-type="${elementTag}" ${attrs}></FoundryLink>`;
      },
    });
    // md.use(markdownItRegex, {
    //   name: "chatcommand",
    //   regex: /\[\[([^\]]+)\]\]/,
    //   replace: (cmd: string) => `<Formula style="border: 1px solid #333;" formula="${cmd}" class="formula"></Formula>`,
    // });
    // return (...a) => (compile(props.html, {}) as any)(...a);
    let contents: RenderFunction = compile(md.renderInline(props.html).replace(/src="([^"]+)"/gi, (a, src) => `src="${store.getAPIUrl(src||'')}"`)); 
    let compiled = (...args: any[]) => {
      if (contents && typeof contents == "function") {
        return h("div", { class: 'dynamic-content' }, [(contents as any)(...args)]);
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
