import { expect, test } from "@playwright/test";

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

  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  //Validate the JSON api response
  expect(responseBody.booking.firstname).toBe("jjkk");
  expect(responseBody.booking).toHaveProperty("lastname", "Brown");

  //Validate nested JSON objects
  expect(responseBody.booking.bookingdates).toEqual({
    checkin: "2018-01-01",
    checkout: "2019-01-01",
  });
  console.log(responseBody);
});
