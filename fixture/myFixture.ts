import { test as baseTest } from "@playwright/test";

type Person = {
  name: string;
  age: number;
};
const myFixtureTest = baseTest.extend<Person>({
  name: "Joe",
  age: 21,
});

export const test = myFixtureTest;
