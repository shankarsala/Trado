import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroSection from "../landing_page/home/HeroSection";

describe("HeroSection Component", () => {
  test("renders hero image", () => {
    render(<HeroSection />);
    const heroImage = screen.getByAltText("Hero");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute(
      "src",
      "media/images/homeHero.png"
    );
  });
});
