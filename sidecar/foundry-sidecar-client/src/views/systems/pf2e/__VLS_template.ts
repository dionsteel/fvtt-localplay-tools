import {
IonPage,
IonHeader,
IonToolbar, IonMenuButton,
IonButtons,
IonImg,
IonAvatar,
IonTitle,
IonContent, IonTabs,
IonTabBar,
IonRouterOutlet,
IonTabButton
} from "@ionic/vue";
import { __VLS_publicComponent, __VLS_internalComponent, __VLS_componentsOption, __VLS_name, actor, sysStore, tabs } from "./ActorSheetPF2e.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'IonPage', typeof __VLS_localComponents, "IonPage", "ionPage", "ion-page"> &
__VLS_WithComponent<'IonHeader', typeof __VLS_localComponents, "IonHeader", "ionHeader", "ion-header"> &
__VLS_WithComponent<'IonToolbar', typeof __VLS_localComponents, "IonToolbar", "ionToolbar", "ion-toolbar"> &
__VLS_WithComponent<'IonButtons', typeof __VLS_localComponents, "IonButtons", "ionButtons", "ion-buttons"> &
__VLS_WithComponent<'IonMenuButton', typeof __VLS_localComponents, "IonMenuButton", "ionMenuButton", "ion-menu-button"> &
__VLS_WithComponent<'IonTitle', typeof __VLS_localComponents, "IonTitle", "ionTitle", "ion-title"> &
__VLS_WithComponent<'IonAvatar', typeof __VLS_localComponents, "IonAvatar", "IonAvatar", "IonAvatar"> &
__VLS_WithComponent<'IonImg', typeof __VLS_localComponents, "IonImg", "IonImg", "IonImg"> &
__VLS_WithComponent<'IonLabel', typeof __VLS_localComponents, "IonLabel", "IonLabel", "IonLabel"> &
__VLS_WithComponent<'IonIcon', typeof __VLS_localComponents, "IonIcon", "IonIcon", "IonIcon"> &
__VLS_WithComponent<'IonContent', typeof __VLS_localComponents, "IonContent", "ionContent", "ion-content"> &
__VLS_WithComponent<'IonTabs', typeof __VLS_localComponents, "IonTabs", "IonTabs", "IonTabs"> &
__VLS_WithComponent<'IonTabBar', typeof __VLS_localComponents, "IonTabBar", "IonTabBar", "IonTabBar"> &
__VLS_WithComponent<'IonTabButton', typeof __VLS_localComponents, "IonTabButton", "IonTabButton", "IonTabButton"> &
__VLS_WithComponent<'IonRouterOutlet', typeof __VLS_localComponents, "IonRouterOutlet", "IonRouterOutlet", "IonRouterOutlet">;
__VLS_components.IonPage; __VLS_components.IonPage; __VLS_components.ionPage; __VLS_components.ionPage; __VLS_components["ion-page"]; __VLS_components["ion-page"];
// @ts-ignore
[IonPage, IonPage,];
__VLS_components.IonHeader; __VLS_components.IonHeader; __VLS_components.ionHeader; __VLS_components.ionHeader; __VLS_components["ion-header"]; __VLS_components["ion-header"];
// @ts-ignore
[IonHeader, IonHeader,];
__VLS_components.IonToolbar; __VLS_components.IonToolbar; __VLS_components.ionToolbar; __VLS_components.ionToolbar; __VLS_components["ion-toolbar"]; __VLS_components["ion-toolbar"];
// @ts-ignore
[IonToolbar, IonToolbar,];
__VLS_components.IonButtons; __VLS_components.IonButtons; __VLS_components.ionButtons; __VLS_components.ionButtons; __VLS_components["ion-buttons"]; __VLS_components["ion-buttons"];
// @ts-ignore
[IonButtons, IonButtons,];
__VLS_components.IonMenuButton; __VLS_components.IonMenuButton; __VLS_components.ionMenuButton; __VLS_components.ionMenuButton; __VLS_components["ion-menu-button"]; __VLS_components["ion-menu-button"];
// @ts-ignore
[IonMenuButton, IonMenuButton,];
__VLS_components.IonTitle; __VLS_components.IonTitle; __VLS_components.ionTitle; __VLS_components.ionTitle; __VLS_components["ion-title"]; __VLS_components["ion-title"];
// @ts-ignore
[IonTitle, IonTitle,];
__VLS_components.IonAvatar; __VLS_components.IonAvatar;
// @ts-ignore
[IonAvatar, IonAvatar,];
__VLS_components.IonImg; __VLS_components.IonImg;
// @ts-ignore
[IonImg, IonImg,];
__VLS_components.IonLabel; __VLS_components.IonLabel;
// @ts-ignore
[IonLabel, IonLabel,];
__VLS_components.IonIcon; __VLS_components.IonIcon; __VLS_components.IonIcon; __VLS_components.IonIcon; __VLS_components.IonIcon; __VLS_components.IonIcon;
// @ts-ignore
[IonIcon, IonIcon, IonIcon, IonIcon, IonIcon, IonIcon,];
__VLS_components.IonContent; __VLS_components.IonContent; __VLS_components.ionContent; __VLS_components.ionContent; __VLS_components["ion-content"]; __VLS_components["ion-content"];
// @ts-ignore
[IonContent, IonContent,];
__VLS_components.IonTabs; __VLS_components.IonTabs;
// @ts-ignore
[IonTabs, IonTabs,];
__VLS_components.IonTabBar; __VLS_components.IonTabBar;
// @ts-ignore
[IonTabBar, IonTabBar,];
__VLS_components.IonTabButton; __VLS_components.IonTabButton;
// @ts-ignore
[IonTabButton, IonTabButton,];
__VLS_components.IonRouterOutlet; __VLS_components.IonRouterOutlet;
// @ts-ignore
[IonRouterOutlet, IonRouterOutlet,];
{
let __VLS_0!: 'IonPage' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.IonPage : 'ionPage' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ionPage : 'ion-page' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['ion-page'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['IonPage'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, }));
({} as { IonPage: typeof __VLS_0; }).IonPage;
({} as { IonPage: typeof __VLS_0; }).IonPage;
const __VLS_2 = __VLS_1({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
{
let __VLS_4!: 'IonHeader' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.IonHeader : 'ionHeader' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ionHeader : 'ion-header' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['ion-header'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['IonHeader'];
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({ ...{}, translucent: ((true)), }));
({} as { IonHeader: typeof __VLS_4; }).IonHeader;
({} as { IonHeader: typeof __VLS_4; }).IonHeader;
const __VLS_6 = __VLS_5({ ...{ ...{}, translucent: ((true)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
{
let __VLS_8!: 'IonToolbar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.IonToolbar : 'ionToolbar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ionToolbar : 'ion-toolbar' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['ion-toolbar'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['IonToolbar'];
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{}, }));
({} as { IonToolbar: typeof __VLS_8; }).IonToolbar;
({} as { IonToolbar: typeof __VLS_8; }).IonToolbar;
const __VLS_10 = __VLS_9({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
{
let __VLS_12!: 'IonButtons' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.IonButtons : 'ionButtons' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ionButtons : 'ion-buttons' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['ion-buttons'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['IonButtons'];
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{}, slot: ("start"), }));
({} as { IonButtons: typeof __VLS_12; }).IonButtons;
({} as { IonButtons: typeof __VLS_12; }).IonButtons;
const __VLS_14 = __VLS_13({ ...{ ...{}, slot: ("start"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
{
let __VLS_16!: 'IonMenuButton' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.IonMenuButton : 'ionMenuButton' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ionMenuButton : 'ion-menu-button' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['ion-menu-button'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['IonMenuButton'];
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{}, color: ("primary"), }));
({} as { IonMenuButton: typeof __VLS_16; }).IonMenuButton;
({} as { IonMenuButton: typeof __VLS_16; }).IonMenuButton;
const __VLS_18 = __VLS_17({ ...{ ...{}, color: ("primary"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_17));
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
}
(__VLS_15.slots!).default;
}
{
let __VLS_20!: 'IonTitle' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.IonTitle : 'ionTitle' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ionTitle : 'ion-title' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['ion-title'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['IonTitle'];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, }));
({} as { IonTitle: typeof __VLS_20; }).IonTitle;
({} as { IonTitle: typeof __VLS_20; }).IonTitle;
const __VLS_22 = __VLS_21({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
if (__VLS_ctx.actor) {
{
let __VLS_24!: 'IonAvatar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.IonAvatar : (typeof __VLS_resolvedLocalAndGlobalComponents)['IonAvatar'];
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{}, }));
({} as { IonAvatar: typeof __VLS_24; }).IonAvatar;
({} as { IonAvatar: typeof __VLS_24; }).IonAvatar;
const __VLS_26 = __VLS_25({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26)!;
{
let __VLS_28!: 'IonImg' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.IonImg : (typeof __VLS_resolvedLocalAndGlobalComponents)['IonImg'];
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ ...{}, src: ((__VLS_ctx.sysStore.config.getAPIUrl(__VLS_ctx.actor?.img || ''))), }));
({} as { IonImg: typeof __VLS_28; }).IonImg;
({} as { IonImg: typeof __VLS_28; }).IonImg;
const __VLS_30 = __VLS_29({ ...{ ...{}, src: ((__VLS_ctx.sysStore.config.getAPIUrl(__VLS_ctx.actor?.img || ''))), }, }, ...__VLS_functionalComponentArgsRest(__VLS_29));
const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30)!;
}
(__VLS_27.slots!).default;
}
// @ts-ignore
[actor, sysStore, actor, sysStore, actor,];
}
{
let __VLS_32!: 'IonLabel' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.IonLabel : (typeof __VLS_resolvedLocalAndGlobalComponents)['IonLabel'];
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{}, }));
({} as { IonLabel: typeof __VLS_32; }).IonLabel;
({} as { IonLabel: typeof __VLS_32; }).IonLabel;
const __VLS_34 = __VLS_33({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_33));
const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34)!;
(__VLS_ctx.actor?.name);
for (const [n] of __VLS_getVForSourceType((__VLS_ctx.actor?.system?.attributes?.dying?.value)!)) {
{
let __VLS_36!: 'IonIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.IonIcon : (typeof __VLS_resolvedLocalAndGlobalComponents)['IonIcon'];
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{}, icon: ((__VLS_ctx.skullSharp)), color: ("danger"), }));
({} as { IonIcon: typeof __VLS_36; }).IonIcon;
({} as { IonIcon: typeof __VLS_36; }).IonIcon;
const __VLS_38 = __VLS_37({ ...{ ...{}, icon: ((__VLS_ctx.skullSharp)), color: ("danger"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
}
// @ts-ignore
[actor, actor, skullSharp, skullSharp,];
}
for (const [n] of __VLS_getVForSourceType((__VLS_ctx.actor?.system?.attributes?.wounded?.value)!)) {
{
let __VLS_40!: 'IonIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.IonIcon : (typeof __VLS_resolvedLocalAndGlobalComponents)['IonIcon'];
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, icon: ((__VLS_ctx.addSharp)), color: ("warning"), }));
({} as { IonIcon: typeof __VLS_40; }).IonIcon;
({} as { IonIcon: typeof __VLS_40; }).IonIcon;
const __VLS_42 = __VLS_41({ ...{ ...{}, icon: ((__VLS_ctx.addSharp)), color: ("warning"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
}
// @ts-ignore
[actor, addSharp, addSharp,];
}
for (const [n] of __VLS_getVForSourceType((__VLS_ctx.actor?.system?.resources?.heroPoints?.value)!)) {
{
let __VLS_44!: 'IonIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.IonIcon : (typeof __VLS_resolvedLocalAndGlobalComponents)['IonIcon'];
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ ...{}, icon: ((__VLS_ctx.medalSharp)), color: ("primary"), }));
({} as { IonIcon: typeof __VLS_44; }).IonIcon;
({} as { IonIcon: typeof __VLS_44; }).IonIcon;
const __VLS_46 = __VLS_45({ ...{ ...{}, icon: ((__VLS_ctx.medalSharp)), color: ("primary"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_45));
const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46)!;
}
// @ts-ignore
[actor, medalSharp, medalSharp,];
}
(__VLS_35.slots!).default;
}
(__VLS_23.slots!).default;
}
(__VLS_11.slots!).default;
}
(__VLS_7.slots!).default;
}
{
let __VLS_48!: 'IonContent' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.IonContent : 'ionContent' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ionContent : 'ion-content' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['ion-content'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['IonContent'];
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{}, }));
({} as { IonContent: typeof __VLS_48; }).IonContent;
({} as { IonContent: typeof __VLS_48; }).IonContent;
const __VLS_50 = __VLS_49({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50)!;
{
let __VLS_52!: 'IonTabs' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.IonTabs : (typeof __VLS_resolvedLocalAndGlobalComponents)['IonTabs'];
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ ...{}, }));
({} as { IonTabs: typeof __VLS_52; }).IonTabs;
({} as { IonTabs: typeof __VLS_52; }).IonTabs;
const __VLS_54 = __VLS_53({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_53));
const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54)!;
{
let __VLS_56!: 'IonTabBar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.IonTabBar : (typeof __VLS_resolvedLocalAndGlobalComponents)['IonTabBar'];
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{}, slot: ("top"), }));
({} as { IonTabBar: typeof __VLS_56; }).IonTabBar;
({} as { IonTabBar: typeof __VLS_56; }).IonTabBar;
const __VLS_58 = __VLS_57({ ...{ ...{}, slot: ("top"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
for (const [tab] of __VLS_getVForSourceType((__VLS_ctx.tabs)!)) {
{
let __VLS_60!: 'IonTabButton' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.IonTabButton : (typeof __VLS_resolvedLocalAndGlobalComponents)['IonTabButton'];
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, tab: ((tab.path)), href: ((`/pf2e/actors/${__VLS_ctx.actor._id}/${tab.path}`)), routerDirection: (('forward')), }));
({} as { IonTabButton: typeof __VLS_60; }).IonTabButton;
({} as { IonTabButton: typeof __VLS_60; }).IonTabButton;
const __VLS_62 = __VLS_61({ ...{ ...{}, tab: ((tab.path)), href: ((`/pf2e/actors/${__VLS_ctx.actor._id}/${tab.path}`)), routerDirection: (('forward')), }, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
(tab.name);
(__VLS_63.slots!).default;
}
// @ts-ignore
[tabs, actor, actor,];
}
(__VLS_59.slots!).default;
}
{
let __VLS_64!: 'IonRouterOutlet' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.IonRouterOutlet : (typeof __VLS_resolvedLocalAndGlobalComponents)['IonRouterOutlet'];
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ ...{}, }));
({} as { IonRouterOutlet: typeof __VLS_64; }).IonRouterOutlet;
({} as { IonRouterOutlet: typeof __VLS_64; }).IonRouterOutlet;
const __VLS_66 = __VLS_65({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_65));
const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66)!;
}
(__VLS_55.slots!).default;
}
(__VLS_51.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
