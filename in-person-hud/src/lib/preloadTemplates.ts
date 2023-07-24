// SPDX-FileCopyrightText: 2022 Johannes Loher
//
// SPDX-License-Identifier: MIT

export async function preloadTemplates(){
  const templatePaths: string[] = [
    // Add paths to "modules/in-person-hud/templates"
    "modules/in-person-hud/templates/in-person-hud.hbs",
  ];

  loadTemplates(templatePaths);
}
