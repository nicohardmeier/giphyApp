import React from "react";
import GifsList from "../Gifslist";
import { render, screen } from '@testing-library/react';
import  mockResponse from '../../../mocks/mockResponse.json';

const gifs = mockResponse.data;

describe("GifsList [COMPONENT]", () => {
  beforeEach(async () => {
    render(<GifsList gifs={gifs}/>);
  });
  test("renders GifsList component", async () => {
    expect(screen.getByTestId("gifsList__container")).toBeInTheDocument();
  });
  test("should render 20 items", async () => {
    const items = screen.getAllByTestId("gif__item");
    expect(items.length).toBe(20);
  });
});
