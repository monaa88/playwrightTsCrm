import { test } from "@playwright/test";

test("api", async ({ request }) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );
  const data = await response.json();
  console.log(data);
});

test("api with query params", async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      data: {
        firstname: "jjkk",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "Breakfast",
      },
    }
  );

  const data = await response.json();
  console.log(data);
});
