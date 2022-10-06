import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-primary-color: #ffb400;
    --main-secondary-color: #2b2a2a;
    --bg-main: #111;
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-white: #fff;
    --bs-gainsboro: #ddd;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-gray-100: #f8f9fa;
    --bs-gray-200: #e9ecef;
    --bs-gray-300: #dee2e6;
    --bs-gray-400: #ced4da;
    --bs-gray-500: #adb5bd;
    --bs-gray-600: #6c757d;
    --bs-gray-700: #495057;
    --bs-gray-800: #343a40;
    --bs-gray-900: #212529;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-primary-rgb: 13,110,253;
    --bs-secondary-rgb: 108,117,125;
    --bs-success-rgb: 25,135,84;
    --bs-info-rgb: 13,202,240;
    --bs-warning-rgb: 255,193,7;
    --bs-danger-rgb: 220,53,69;
    --bs-light-rgb: 248,249,250;
    --bs-dark-rgb: 33,37,41;
    --bs-white-rgb: 255,255,255;
    --bs-black-rgb: 0,0,0;
    --bs-body-color-rgb: 33,37,41;
    --bs-body-bg-rgb: 255,255,255;
    --bs-font-sans-serif: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --bs-gradient: linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0));
    --bs-body-font-family: var(--bs-font-sans-serif);
    --bs-body-font-size: 1rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.5;
    --bs-body-color: #212529;
    --bs-body-bg: #fff;
  }
  
  * {
    box-sizing: border-box;

    &::selection {
      background-color: #cfa144 !important;
      color: #fff !important;
    }
  }

    html {
      background-color: ${({ theme }) => theme.body.primary};
    }

    body {
      color: var(--bs-white);
      margin: 0;
      
      //todo: scrollbar width
      
      &::-webkit-scrollbar-track {
        background: #333 !important;
      }
      
      &::-webkit-scrollbar-thumb {
        background-color: #555;
        border: 3px solid #333;
        border-radius: 20px;
      }
    }
    
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
`;

export const MainTitle = styled.h3`
  font-family: Poppins, sans-serif;
  font-size: 26px;
  padding-bottom: 22px;
  text-transform: uppercase;
  margin: 0;
  color: ${({ theme }) => theme.fontColor.primary};
`;

export const Separator = styled.hr`
  border-top: ${({ theme }) => theme.border.primary};
  margin: 70px auto 55px;
  max-width: 40%;
  height: 1px;
  opacity: 0.25;
  color: inherit;
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.input.background};
  border: ${({ theme }) => theme.input.border};
  border-radius: 30px;
  color: ${({ theme }) => theme.fontColor.primary};
  outline: none !important;
  padding: 14.5px 26px;
  transition: 0.3s;
  width: 100%;
  margin: 0 7.5px;
  font-size: 15px;

  &:focus {
    border: 1px solid var(--main-primary-color);
  }
`;

//todo: duplicated previous lines
export const TextArea = styled.textarea`
  background: ${({ theme }) => theme.input.background};
  border: ${({ theme }) => theme.input.border};
  border-radius: 30px;
  color: ${({ theme }) => theme.fontColor.primary};
  height: 200px;
  outline: none !important;
  overflow: hidden;
  padding: 12px 26px;
  transition: 0.3s;
  width: 100%;
  margin: 0 7.5px;
  font-family: Poppins, sans-serif;
  font-size: 15px;
  resize: vertical;

  &:focus {
    border: 1px solid var(--main-primary-color);
  }
`;
