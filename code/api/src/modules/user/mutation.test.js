import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

describe("user mutations", () => {
  let server;

  beforeAll(() => {
    server = express();
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  });

  it("is true", () => {
    expect(true).toBe(true)
  })

  it('stylePreferences table column exists', async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ user(id: 2) { id name stylePreferences } }' })
      .expect(200)

    expect(response.body.data.user.stylePreferences).toEqual(null)
  })

  it('user update', async () => {
    const response = await request(server)
    .post('/')
    .send({ query: 'mutation{ userUpdate(id: 1, stylePreferences: \"classic\"){ stylePreferences }}' })
    .expect(200)
    console.log(response.body)

    expect(response.body.data.userUpdate.stylePreferences).toEqual('classic')
  })
})
