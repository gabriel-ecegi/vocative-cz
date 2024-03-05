import { expect, it, describe } from "vitest";
import { vocalize } from "../vocalize";

const testCases: [string | null | undefined, string | null][] = [
  [null, null],
  [undefined, null],
  ["", ""],
  [" ", ""],
  ["  ", ""],
  ["Aneta", "Aneto"],
  ["Antonín", "Antoníne"],
  ["Bob", "Bobe"],
  ["Daniel", "Danieli"],
  ["Dominik", "Dominiku"],
  ["Dušan", "Dušane"],
  ["Elly", "Elly"],
  ["Eva", "Evo"],
  ["Filip", "Filipe"],
  ["František", "Františku"],
  ["Gabriel", "Gabrieli"],
  ["Gabriela", "Gabrielo"],
  ["Hynek", "Hynku"],
  ["Ivan", "Ivane"],
  ["Jan", "Jane"],
  ["Jaroslav", "Jaroslave"],
  ["Jaroslav Jan", "Jaroslave Jane"],
  ["Jiří", "Jiří"],
  ["Jindřich", "Jindřichu"],
  ["Jozef", "Jozefe"],
  ["Leoš", "Leoši"],
  ["Marek", "Marku"],
  ["Martin", "Martine"],
  ["Patrik", "Patriku"],
  ["Pavel", "Pavle"],
  ["Petr", "Petře"],
  ["Robert", "Roberte"],
  ["Rostislav", "Rostislave"],
  ["Tomáš", "Tomáši"],
  ["Timotej", "Timoteji"],
  ["Vít", "Víte"],
  ["Řehoř", "Řehoři"],
  ["Zdeněk", "Zdeňku"],
  ["Alena Pekařová", "Aleno Pekařová"],
  ["Daniel Pekař", "Danieli Pekaři"],
  ["Daniel Janů", "Danieli Janů"],
  ["Daniel Janků", "Danieli Janků"],
  ["Daniel Matůšů", "Danieli Matůšů"],
  ["Daniel Hoke", "Danieli Hoke"],
  ["Daniel Danke", "Danieli Danke"],
  ["Dominik Bránka", "Dominiku Bránko"],
  ["Dominik Pfeffer", "Dominiku Pfeffere"],
  ["František Francouz", "Františku Francouzi"],
  ["Gabriel Ečegi", "Gabrieli Ečegi"],
  ["Hynek Petrla", "Hynku Petrlo"],
  ["Jiří Pálka", "Jiří Pálko"],
  ["Petr Klaus", "Petře Klausi"],
  ["Tomáš Lecián", "Tomáši Leciáne"],
  ["Zdeněk Mikel", "Zdeňku Mikeli"],
];

describe("vocalize function", () => {
  it.each(testCases)('correctly converts "%s" to "%s"', (input, expected) => {
    expect(vocalize(input)).toBe(expected);
  });
});
