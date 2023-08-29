"use strict";

import Plugin from "markdown-it-regexp";
import type { PluginWithOptions } from "markdown-it";

// import extend from "extend";
import sanitize from "sanitize-filename";
// import Url from "reurl";
// import { applyDeep } from "./utils";

const INITIAL_HASH_REGEX = /^#/;
const DIR_SEPARATOR_REGEX = /[/\\]/g;
export interface UUIDLinkerOptions {
  baseURL: string;
  relativeBaseURL: string;
  makeAllLinksAbsolute: boolean;
  uriSuffix: ".html";
  htmlAttributes: Record<string, any>;
  generatePagePathFromLabel: (label: string) => string;
  generatePageNameFromLabel?: (label: string) => string;
  postProcessPagePath: (pagePath: string) => string;
  postProcessPageName?: (pageName: string) => string;
  postProcessPageHash: (pageHash: string) => string;
  postProcessLabel: (label: string) => string;
}
export default (_options: Partial<UUIDLinkerOptions>) => {
  const defaults: UUIDLinkerOptions = {
    baseURL: "/",
    relativeBaseURL: "./",
    makeAllLinksAbsolute: false,
    uriSuffix: ".html",
    htmlAttributes: {},
    generatePagePathFromLabel: (label) => {
      return label;
    },
    postProcessPagePath: (pagePath) => {
      pagePath = pagePath.trim();
      pagePath = pagePath
        .split("/")
        .map((v) => sanitize(v))
        .join("/");
      pagePath = pagePath.replace(/\s+/g, "_");
      return pagePath;
    },
    postProcessPageHash: (pageHash) => {
      pageHash = pageHash.trim();
      pageHash = pageHash
        .split("/")
        .map((v) => sanitize(v))
        .join("/");
      pageHash = pageHash.replace(/\s+/g, "_");
      return pageHash;
    },
    postProcessLabel: (label) => {
      label = label.trim();
      if (label.match(INITIAL_HASH_REGEX)) {
        label = label.replace(INITIAL_HASH_REGEX, "");
      } else {
        label = label.replace(/#[^#]*$/, "");
      }
      return label;
    },
  };

  const options: UUIDLinkerOptions = { ...defaults, ..._options };

  function isAbsolute(pagePath: string) {
    return options.makeAllLinksAbsolute || pagePath.charCodeAt(0) === 0x2f; /* / */
  }

  /**
   * Converts a path from the form '/path/to'
   * to an array of the form ['path', 'to']
   */
  function pathStrToArray(pathStr: string) {
    return pathStr.split(DIR_SEPARATOR_REGEX).filter((dirName) => !!dirName);
  }

  // old wiki regex -  /\[\[([^|\]\n]+)(\|([^\]\n]+))?\]\]/,
  return Plugin(/@UUID\[([^\]]+)\](\{([^\}]+)\})*/, (match: string[], utils: { escape: (s: string) => string }) => {
    let label = "";
    let pagePath = null;
    let htmlAttrs = [];
    let htmlAttrsString = "";

    const absoluteBaseDirs = pathStrToArray(options.baseURL);
    const relativeBaseDirs = pathStrToArray(options.relativeBaseURL);

    const postProcessLabel = options.postProcessLabel;
    const postProcessPagePath = options.postProcessPageName || options.postProcessPagePath;
    const postProcessPageHash = options.postProcessPageHash;
    const generatePagePathFromLabel = options.generatePageNameFromLabel || options.generatePagePathFromLabel;

    const isSplit = !!match[3];
    if (isSplit) {
      label = match[3];
      pagePath = match[1];
    } else {
      label = match[1];
      pagePath = generatePagePathFromLabel(match[1]);
    }

    // // parse page path
    // let pageUrl = new Url(pagePath);

    // // run postprocessing
    // if (pageUrl.file) {
    //   const file = postProcessPagePath(pageUrl.file);
    //   pageUrl = pageUrl.set({
    //     file,
    //   });
    // }

    // if (pageUrl.hash) {
    //   const hash = postProcessPageHash(pageUrl.hash);
    //   pageUrl = pageUrl.set({
    //     hash,
    //   });
    // }

    // label = postProcessLabel(label);

    // if (isAbsolute(pagePath)) {
    //   const dirs = absoluteBaseDirs.concat(pageUrl.dirs || []);
    //   pageUrl = pageUrl.set({
    //     root: "/",
    //     dirs,
    //   });
    // } else if (pageUrl.file) {
    //   // relative
    //   const dirs = relativeBaseDirs.concat(pageUrl.dirs || []);
    //   pageUrl = pageUrl.set({
    //     root: null,
    //     dirs,
    //   });
    // }

    // // add the URI suffix (e.g. `.html`)
    // // but only if the filename is not empty
    // if (pageUrl.file && options.uriSuffix) {
    //   pageUrl = pageUrl.set({
    //     file: pageUrl.file + options.uriSuffix,
    //   });
    // }

    // const href = pageUrl.toString();
    // const escapedHref = utils.escape(href);

    // htmlAttrs.push(`href="${escapedHref}"`);
    // for (let attrName in options.htmlAttributes) {
    //   const attrValue = options.htmlAttributes[attrName];
    //   htmlAttrs.push(`${attrName}="${attrValue}"`);
    // }
    // htmlAttrsString = htmlAttrs.join(" ");

    return `<UUIDLink target="${pagePath}" label="${label}" />`;
  }) as PluginWithOptions;
};
