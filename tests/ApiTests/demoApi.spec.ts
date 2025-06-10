import { test } from "@playwright/test";

test("api", async ({ request }) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );
  const data = await response.json();
  console.log(data);
});
