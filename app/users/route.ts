export const GET = async () => {
  try {
    return Response.json("something");
  } catch (error) {
    Response.json(error);
  }
};
export const POST = async () => {};
