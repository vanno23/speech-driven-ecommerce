import React, { useEffect, useState } from "react";
import CategoriesProducts from "../components/CategoriesProducts/CategoriesProducts";
import CategoriesData from "./CategoriesData.json";
import "./Categories.css";
import annyang from "annyang";
import { useSearch } from "../useContext/SearchContext";
import VoiceNavigation from "../VoiceNavigation";
import CategoriesVoice from "../voice/CategoriesVoice";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const { searchInput } = useSearch();
  const navigate = useNavigate();

  const uniqueCategories = [
    ...new Set(products.map((product) => product.category.toLowerCase())),
  ];
  const uniqueColors = [
    ...new Set(
      products.flatMap((product) =>
        product.colors.map((color) => color.toLowerCase())
      )
    ),
  ];
  const uniqueSizes = [
    ...new Set(
      products.flatMap((product) =>
        product.sizes.map((size) => size.toLowerCase())
      )
    ),
  ];

  useEffect(() => {
    setProducts(CategoriesData.Categories);

    if (annyang) {
      // Define the voice commands
      const commands = {
        "select category :category": (category) =>
          handleCategoryChange(category.toLowerCase()),
        "remove category :category": (category) =>
          handleCategoryChange(category.toLowerCase()),
        "select :color color": (color) =>
          handleColorChange(color.toLowerCase()),
        "remove :color color": (color) =>
          handleColorChange(color.toLowerCase()),
        "select :size size": (size) => handleSizeChange(size.toLowerCase()),
        "remove :size size": (size) => handleSizeChange(size.toLowerCase()),
        "go to home": () => navigate("/"),
        "go to about": () => navigate("/about"),
        "go to categories": () => navigate("/categories"),
        "go to contact": () => navigate("/contact"),
        "go to cart": () => navigate("/cart"),
        "scroll down": () =>
          window.scrollBy({ left: 0, top: 400, behavior: "smooth" }),
        "scroll up": () =>
          window.scrollBy({ left: 0, top: -400, behavior: "smooth" }),
      };

      // Add the commands to annyang
      annyang.addCommands(commands);

      // Start listening
      annyang.start();
    }

    // Cleanup on unmount
    return () => {
      if (annyang) {
        annyang.abort();
      }
    };
  }, []);

  const handleCategoryChange = (category) => {
    category = category.toLowerCase();
    setSelectedCategories((prev) =>
      prev.map((c) => c.toLowerCase()).includes(category)
        ? prev.filter((c) => c.toLowerCase() !== category)
        : [...prev, category]
    );
  };

  const handleColorChange = (color) => {
    color = color.toLowerCase();
    setSelectedColors((prev) =>
      prev.map((c) => c.toLowerCase()).includes(color)
        ? prev.filter((c) => c.toLowerCase() !== color)
        : [...prev, color]
    );
  };

  const handleSizeChange = (size) => {
    size = size.toLowerCase();
    if (!uniqueSizes.includes(size)) {
      return; // If the size does not exist, do nothing
    }
    setSelectedSizes((prev) =>
      prev.map((s) => s).includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchInput = searchInput
      ? product.name.toLowerCase().includes(searchInput.toLowerCase())
      : true;
    return (
      matchesSearchInput &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category.toLowerCase())) &&
      (selectedColors.length === 0 ||
        selectedColors.some((color) =>
          product.colors.map((c) => c.toLowerCase()).includes(color)
        )) &&
      (selectedSizes.length === 0 ||
        selectedSizes.some((size) =>
          product.sizes.map((s) => s.toLowerCase()).includes(size)
        ))
    );
  });

  return (
    <div className="CategoriesPage">
      <VoiceNavigation />
      <div className="filters">
        <div className="categories-filter">
          <span className="filter-title">Categories</span>
          <div className="category-name">
            {uniqueCategories.map((category, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </label>
            ))}
          </div>
        </div>
        <div className="colors-filter">
          <span className="filter-title">Color</span>
          <div className="color-container">
            {uniqueColors.map((color, index) => (
              <div
                key={color}
                className={`colorBorder ${
                  selectedColors.includes(color) ? "selectedColor" : ""
                }`}
              >
                <button
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                ></button>
              </div>
            ))}
          </div>
        </div>
        <div className="sizes-filter">
          <span className="filter-title">Size</span>
          <div>
            {uniqueSizes.map((size, index) => (
              <button
                key={size}
                className={`filter_size ${
                  selectedSizes.includes(size) ? "selectedSize" : ""
                }`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
      <CategoriesVoice />
      <CategoriesProducts Data={filteredProducts} />
    </div>
  );
};

export default Categories;
