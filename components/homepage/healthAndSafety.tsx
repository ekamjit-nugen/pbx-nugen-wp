"use client";
import React, { useEffect } from "react";
import WorkArrow from "../../image/images/work-arrow.png";
import circle from "../../image/images/shape-circle.png";
import square from "../../image/images/shape-square.png";
import tri from "../../image/images/shape-triangle.png";
import { motion } from "framer-motion";
import Image from "next/image";
import hse from "../../image/images/hse.png";
import useSize from "../windowSize";
import {
  leftToRightAnimation,
  rightToLeftAnimation,
  staggerParent,
  topToBottomAnimation,
} from "@/lib/animation/animationUtils";
const workData = [
  {
    color: "#FF366B",
    title: "Management commitment",
    content: "To ensuring the safest possible work environment for employees. ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="55px"
        viewBox="0 0 140 140"
        id="partnership"
      >
        <path d="M22.937 75.25a.996.996 0 0 1-.504-.137l-15.938-9.32a1.002 1.002 0 0 1-.355-1.373l20.98-35.426a.999.999 0 0 1 1.364-.353l15.938 9.32a1.002 1.002 0 0 1 .356 1.372L23.798 74.76a.999.999 0 0 1-.861.49zM8.373 64.574l14.212 8.31 19.96-33.706-14.212-8.31-19.96 33.706z"></path>
        <path d="M29.883 76.237a.996.996 0 0 1-.504-.137l-5.593-3.272a1.002 1.002 0 0 1-.356-1.373l18.275-30.857a1 1 0 0 1 1.365-.354l5.594 3.27a1.002 1.002 0 0 1 .355 1.374L30.745 75.746a.999.999 0 0 1-.862.49zm-4.22-4.627 3.868 2.261 17.255-29.137-3.868-2.261L25.663 71.61zm-6.56-4.714c-.745 0-1.497-.19-2.182-.592a4.271 4.271 0 0 1-1.995-2.633 4.254 4.254 0 0 1 .462-3.257c1.207-2.039 3.858-2.722 5.91-1.523a4.271 4.271 0 0 1 1.995 2.633 4.254 4.254 0 0 1-.461 3.257 4.328 4.328 0 0 1-3.73 2.115zm.01-6.598c-.797 0-1.572.406-2.005 1.136a2.286 2.286 0 0 0 .822 3.144 2.335 2.335 0 0 0 3.18-.817 2.286 2.286 0 0 0-.822-3.144 2.327 2.327 0 0 0-1.175-.319zm90.86 16.27a1 1 0 0 1-.869-.503L91.27 44.953a1 1 0 0 1 .375-1.367l5.64-3.192a1 1 0 0 1 1.36.373l17.834 31.111a1 1 0 0 1-.375 1.367l-5.64 3.193a.998.998 0 0 1-.491.13zM93.505 44.83l16.84 29.376L114.244 72l-16.84-29.376-3.9 2.207z"></path>
        <path d="M116.933 75.678a1 1 0 0 1-.869-.503L95.589 39.458a1 1 0 0 1 .375-1.367l16.069-9.095a1 1 0 0 1 1.36.373l20.475 35.717a1 1 0 0 1-.375 1.367l-16.069 9.095a.998.998 0 0 1-.491.13zM97.825 39.336l19.48 33.982 14.327-8.11-19.48-33.981-14.327 8.11z"></path>
        <path d="M121.04 67.041a4.328 4.328 0 0 1-3.76-2.168 4.255 4.255 0 0 1-.416-3.261 4.275 4.275 0 0 1 2.032-2.606c2.068-1.169 4.711-.45 5.889 1.608.571.996.718 2.155.415 3.261a4.275 4.275 0 0 1-2.032 2.605 4.305 4.305 0 0 1-2.128.561zm-.011-6.596c-.39 0-.785.096-1.148.301a2.292 2.292 0 0 0-.866 3.133 2.335 2.335 0 0 0 3.168.86 2.286 2.286 0 0 0 .866-3.131 2.324 2.324 0 0 0-2.02-1.163zM69.492 52.33a.993.993 0 0 1-.543-.16c-10.89-7.072-17.778-.702-17.846-.636-.323.307-.81.365-1.195.14l-4.504-2.634a1 1 0 0 1 1.01-1.726l3.911 2.287c2.083-1.534 9.415-5.793 19.713.89a1 1 0 0 1-.546 1.84zM35.82 79.706c-.019 0-.038 0-.056-.002a1 1 0 0 1-.944-1.053l.221-3.979-3.577-2.092a1 1 0 0 1 1.01-1.726l4.104 2.4a1 1 0 0 1 .494.92l-.255 4.588a1 1 0 0 1-.997.944zm38.93 31.52a6.32 6.32 0 0 1-3.2-.866l-2.424-1.387a1 1 0 1 1 .993-1.736l2.433 1.391c2.07 1.21 4.733.527 5.946-1.521.64-1.082.837-2.282.552-3.38-.257-.99-.88-1.799-1.804-2.339l-.563-.33a1 1 0 0 1 1.01-1.726l.562.33c1.374.803 2.344 2.069 2.731 3.563.42 1.617.146 3.357-.768 4.901a6.346 6.346 0 0 1-5.469 3.1z"></path>
        <path d="M84.904 104.88a6.23 6.23 0 0 1-3.152-.855l-5.351-3.131a1 1 0 1 1 1.01-1.727l5.35 3.131c2.018 1.179 4.626.51 5.812-1.494a4.155 4.155 0 0 0 .451-3.18 4.186 4.186 0 0 0-1.955-2.578l-6.365-3.722a1 1 0 0 1 1.01-1.727l6.365 3.723a6.174 6.174 0 0 1 2.881 3.802 6.142 6.142 0 0 1-.666 4.702 6.254 6.254 0 0 1-5.39 3.055z"></path>
        <path d="M94.015 98.118a6.23 6.23 0 0 1-3.152-.854l-9.429-5.514a1 1 0 0 1 1.01-1.726l9.429 5.513c2.016 1.18 4.625.51 5.811-1.494a4.155 4.155 0 0 0 .451-3.18 4.186 4.186 0 0 0-1.955-2.578l-9.429-5.513a1 1 0 0 1 1.01-1.727l9.429 5.514a6.174 6.174 0 0 1 2.881 3.803 6.142 6.142 0 0 1-.666 4.7 6.254 6.254 0 0 1-5.39 3.056z"></path>
        <path d="M101.256 90.23a6.451 6.451 0 0 1-3.264-.885l-11.24-6.573a1 1 0 0 1 1.01-1.727l11.24 6.573c2.123 1.24 4.865.537 6.114-1.572a4.37 4.37 0 0 0 .475-3.346 4.403 4.403 0 0 0-2.057-2.712l-11.241-6.574a1 1 0 0 1 1.01-1.726l11.24 6.573a6.39 6.39 0 0 1 2.984 3.938 6.359 6.359 0 0 1-.69 4.867 6.476 6.476 0 0 1-5.58 3.164z"></path>
        <path d="M92.795 73.55a.996.996 0 0 1-.503-.137L73.44 62.391a1 1 0 0 1 1.01-1.727L93.3 71.687a1 1 0 0 1-.506 1.863zM38.038 89.596c-2.24.001-4.41-1.191-5.542-3.285a6.173 6.173 0 0 1-.486-4.75 6.206 6.206 0 0 1 3.046-3.712l10.792-5.765c3.049-1.63 6.862-.487 8.501 2.544a6.175 6.175 0 0 1 .486 4.75 6.21 6.21 0 0 1-3.045 3.712l-10.793 5.765a6.267 6.267 0 0 1-2.96.741zm10.775-16.255c-.685 0-1.378.163-2.022.507l-10.793 5.765a4.223 4.223 0 0 0-2.073 2.524 4.19 4.19 0 0 0 .33 3.223c1.117 2.064 3.719 2.841 5.8 1.731l10.793-5.765a4.226 4.226 0 0 0 2.072-2.525 4.192 4.192 0 0 0-.33-3.222 4.289 4.289 0 0 0-3.777-2.238zm-2.494-.375h.01-.01z"></path>
        <path d="M44.88 97.85c-2.237 0-4.409-1.192-5.541-3.286a6.175 6.175 0 0 1-.487-4.748 6.213 6.213 0 0 1 3.046-3.714l11.166-5.861c3.046-1.626 6.859-.486 8.498 2.544a6.176 6.176 0 0 1 .486 4.751 6.206 6.206 0 0 1-3.046 3.711l-11.169 5.865a6.26 6.26 0 0 1-2.952.739zM56.027 81.5c-.685 0-1.379.162-2.023.506l-.006.004-11.163 5.86a4.22 4.22 0 0 0-2.066 2.52 4.19 4.19 0 0 0 .33 3.223c1.117 2.064 3.717 2.842 5.8 1.731l11.169-5.864a4.218 4.218 0 0 0 2.066-2.52 4.192 4.192 0 0 0-.33-3.223 4.289 4.289 0 0 0-3.777-2.238zm-2.494-.376h.01-.01z"></path>
        <path d="M54.367 104.745c-2.238 0-4.409-1.192-5.541-3.287a6.175 6.175 0 0 1-.487-4.749 6.21 6.21 0 0 1 3.046-3.713l9.61-5.092c3.048-1.625 6.86-.487 8.499 2.545a6.176 6.176 0 0 1 .486 4.75 6.21 6.21 0 0 1-3.045 3.712l-9.612 5.093a6.256 6.256 0 0 1-2.956.741zm9.591-15.583c-.685 0-1.378.163-2.022.507l-.003.002-9.609 5.091a4.222 4.222 0 0 0-2.07 2.523 4.192 4.192 0 0 0 .33 3.222c1.118 2.067 3.717 2.842 5.8 1.732l9.611-5.093a4.221 4.221 0 0 0 2.07-2.524 4.193 4.193 0 0 0-.33-3.222 4.288 4.288 0 0 0-3.777-2.238zm-2.494-.375h.01-.01z"></path>
        <path d="M64.09 111.496c-2.235 0-4.39-1.181-5.524-3.26a6.177 6.177 0 0 1-.504-4.747 6.21 6.21 0 0 1 3.032-3.724l5.098-2.979a.364.364 0 0 1 .03-.016c3.04-1.64 6.86-.514 8.51 2.513a6.172 6.172 0 0 1 .503 4.747 6.207 6.207 0 0 1-3.031 3.723l-5.098 2.979a6.342 6.342 0 0 1-3.016.764zm3.095-12.973-5.112 2.985a4.25 4.25 0 0 0-2.093 2.55 4.19 4.19 0 0 0 .342 3.222c1.125 2.06 3.73 2.827 5.805 1.709l5.098-2.979c1.037-.56 1.77-1.459 2.093-2.549a4.189 4.189 0 0 0-.342-3.22c-1.123-2.058-3.718-2.826-5.79-1.718zM63.32 74.76a6.863 6.863 0 0 1-3.474-.943 6.796 6.796 0 0 1-3.175-4.19 6.764 6.764 0 0 1 .734-5.18l6.115-10.324a3.585 3.585 0 0 1 1.696-1.482l13.1-5.55a3.665 3.665 0 0 1 1.128-.278c1.458-.114 6.328-.233 10.058 2.93l4.065-2.195a1 1 0 1 1 .95 1.76l-4.687 2.53a.999.999 0 0 1-1.172-.162c-3.18-3.086-7.734-2.98-9.051-2.87-.18.016-.346.057-.51.126l-13.1 5.55c-.32.135-.581.364-.757.66l-6.114 10.325a4.777 4.777 0 0 0-.519 3.658 4.81 4.81 0 0 0 2.248 2.965c2.32 1.358 5.317.586 6.683-1.718l5.542-9.357a1 1 0 1 1 1.72 1.02l-5.542 9.357c-1.28 2.162-3.58 3.367-5.938 3.367zM104.038 80.124a1 1 0 0 1-.998-.952l-.229-4.746a1.001 1.001 0 0 1 .471-.897l3.747-2.329a1 1 0 0 1 1.056 1.7l-3.248 2.017.2 4.16a1 1 0 0 1-.95 1.046l-.05.001z"></path>
      </svg>
    ),
  },
  {
    color: "#FF366B",
    title: "Clear Policies & Expectations",
    content:
      "Maecena nec odio et ante tcidunt tempus. Donec vitae sapien utbero venenatis faucibus. ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="50px"
        fill="none"
        viewBox="0 0 32 32"
        id="terms-conditions"
      >
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M9.5 15C10.3284 15 11 14.3284 11 13.5 11 12.6716 10.3284 12 9.5 12 8.67157 12 8 12.6716 8 13.5 8 14.3284 8.67157 15 9.5 15zM9.5 14C9.77614 14 10 13.7761 10 13.5 10 13.2239 9.77614 13 9.5 13 9.22386 13 9 13.2239 9 13.5 9 13.7761 9.22386 14 9.5 14zM11 19.5C11 20.3284 10.3284 21 9.5 21 8.67157 21 8 20.3284 8 19.5 8 18.6716 8.67157 18 9.5 18 10.3284 18 11 18.6716 11 19.5zM10 19.5C10 19.7761 9.77614 20 9.5 20 9.22386 20 9 19.7761 9 19.5 9 19.2239 9.22386 19 9.5 19 9.77614 19 10 19.2239 10 19.5zM9.5 27C10.3284 27 11 26.3284 11 25.5 11 24.6716 10.3284 24 9.5 24 8.67157 24 8 24.6716 8 25.5 8 26.3284 8.67157 27 9.5 27zM9.5 26C9.77614 26 10 25.7761 10 25.5 10 25.2239 9.77614 25 9.5 25 9.22386 25 9 25.2239 9 25.5 9 25.7761 9.22386 26 9.5 26z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#000"
          d="M14 13C13.7239 13 13.5 13.2239 13.5 13.5 13.5 13.7761 13.7239 14 14 14H26C26.2761 14 26.5 13.7761 26.5 13.5 26.5 13.2239 26.2761 13 26 13H14zM14 25C13.7239 25 13.5 25.2239 13.5 25.5 13.5 25.7761 13.7239 26 14 26H26C26.2761 26 26.5 25.7761 26.5 25.5 26.5 25.2239 26.2761 25 26 25H14zM13.5 19.5C13.5 19.2239 13.7239 19 14 19H26C26.2761 19 26.5 19.2239 26.5 19.5 26.5 19.7761 26.2761 20 26 20H14C13.7239 20 13.5 19.7761 13.5 19.5z"
        ></path>
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M7.5 3L6 2V5H5C3.34315 5 2 6.34315 2 8V27C2 28.6569 3.34315 30 5 30H27C28.6569 30 30 28.6569 30 27V8C30 6.34315 28.6569 5 27 5H26V2L24.5 3L23.5 2L22.5 3L21.5 2L20.5 3L19 2V5H13V2L11.5 3L10.5 2L9.5 3L8.5 2L7.5 3ZM12 3.86852L11.3726 4.2868L10.5 3.41421L9.5 4.41421L8.5 3.41421L7.62742 4.2868L7 3.86852V8.13148L7.62742 7.7132L8.5 8.58579L9.5 7.58579L10.5 8.58579L11.3726 7.7132L12 8.13148V3.86852ZM6 6V10L7.5 9L8.5 10L9.5 9L10.5 10L11.5 9L13 10V6H19V10L20.5 9L21.5 10L22.5 9L23.5 10L24.5 9L26 10V6H27C28.1046 6 29 6.89543 29 8V27C29 28.1046 28.1046 29 27 29H5C3.89543 29 3 28.1046 3 27V8C3 6.89543 3.89543 6 5 6H6ZM25 3.86852L24.3726 4.2868L23.5 3.41421L22.5 4.41421L21.5 3.41421L20.6274 4.2868L20 3.86852V8.13148L20.6274 7.7132L21.5 8.58579L22.5 7.58579L23.5 8.58579L24.3726 7.7132L25 8.13148V3.86852Z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    color: "#FF366B",
    title: "Continous Improvement",
    content:
      "Maecena nec odio et ante tcidunt tempus. Donec vitae sapien utbero venenatis faucibus. ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="50px"
        enable-background="new 0 0 512 512"
        viewBox="0 0 512 512"
        id="continuous-process"
      >
        <path
          d="M205.371,478.291c-0.947,3.587-4.186,5.959-7.729,5.959c-0.676,0-1.363-0.086-2.048-0.268
    c-48.661-12.852-91.162-40.372-122.906-79.587C33.05,355.431,14.852,293.961,21.447,231.31
    c6.595-62.651,37.193-118.984,86.158-158.622c32.34-26.18,70.448-43.14,111.113-49.596l-14.567-8.099
    c-3.861-2.147-5.251-7.019-3.104-10.88c2.148-3.861,7.019-5.251,10.88-3.104l36.738,20.428c2.149,1.195,3.63,3.313,4.014,5.742
    c0.385,2.429-0.37,4.899-2.045,6.7l-28.638,30.771c-1.576,1.693-3.715,2.55-5.858,2.55c-1.951,0-3.907-0.71-5.448-2.144
    c-3.234-3.011-3.416-8.072-0.406-11.307l14.29-15.355c-39.15,5.602-75.872,21.61-106.902,46.729
    c-45.643,36.949-74.165,89.461-80.313,147.861c-6.147,58.401,10.815,115.701,47.765,161.345
    c29.591,36.554,69.204,62.206,114.557,74.185C203.951,469.642,206.5,474.02,205.371,478.291z M439.313,107.605
    c-31.748-39.22-74.249-66.74-122.908-79.588c-4.273-1.127-8.649,1.421-9.777,5.693c-1.127,4.271,1.421,8.649,5.693,9.777
    c45.35,11.973,84.962,37.625,114.557,74.184c36.949,45.644,53.912,102.942,47.765,161.344
    c-6.148,58.401-34.671,110.913-80.313,147.862c-31.014,25.107-67.762,41.133-106.908,46.735l14.296-15.362
    c3.01-3.234,2.828-8.297-0.406-11.307c-3.233-3.011-8.296-2.828-11.307,0.406l-28.637,30.771c-1.675,1.801-2.43,4.271-2.045,6.7
    c0.384,2.43,1.864,4.547,4.014,5.742l36.737,20.428c1.231,0.685,2.565,1.009,3.881,1.009c2.81,0,5.536-1.483,6.999-4.113
    c2.146-3.861,0.757-8.732-3.104-10.88l-14.573-8.103c40.662-6.457,78.797-23.425,111.12-49.592
    c48.965-39.638,79.563-95.971,86.158-158.623C497.148,218.039,478.95,156.569,439.313,107.605z M259.218,368.262l-13.334,13.335
    c-2.339,2.341-5.879,3-8.904,1.655l-11.569-5.139c-7.429,4.464-15.401,7.77-23.795,9.865l-4.543,11.803
    c-1.188,3.088-4.156,5.126-7.466,5.126h-18.858c-3.31,0-6.277-2.038-7.466-5.126l-4.545-11.807
    c-8.388-2.096-16.358-5.4-23.788-9.863l-11.573,5.141c-3.023,1.343-6.563,0.686-8.903-1.654l-13.335-13.334
    c-2.341-2.34-2.998-5.88-1.655-8.904l5.139-11.568c-4.463-7.428-7.769-15.4-9.864-23.796l-11.804-4.543
    c-3.089-1.188-5.127-4.156-5.127-7.466v-18.857c0-3.31,2.038-6.277,5.126-7.466l11.807-4.545c2.095-8.389,5.399-16.36,9.863-23.791
    l-5.14-11.571c-1.343-3.024-0.686-6.563,1.654-8.903l13.334-13.335c2.34-2.342,5.88-2.999,8.904-1.655l11.574,5.141
    c7.43-4.463,15.4-7.768,23.788-9.862l4.545-11.808c1.188-3.088,4.156-5.126,7.466-5.126h18.857c3.31,0,6.277,2.038,7.466,5.126
    l4.546,11.808c8.387,2.095,16.358,5.399,23.788,9.862l11.573-5.141c3.026-1.342,6.563-0.686,8.904,1.654l13.335,13.335
    c2.34,2.341,2.997,5.88,1.654,8.904l-5.139,11.567c4.464,7.429,7.769,15.401,9.864,23.796l11.803,4.543
    c3.089,1.188,5.127,4.156,5.127,7.466v18.858c0,3.31-2.038,6.277-5.126,7.466l-11.807,4.545c-2.096,8.388-5.4,16.358-9.863,23.788
    l5.141,11.573C262.215,362.383,261.558,365.922,259.218,368.262z M255.848,310.604l10.68-4.111v-7.872l-10.676-4.109
    c-2.567-0.987-4.447-3.225-4.977-5.924c-1.844-9.383-5.488-18.176-10.833-26.135c-1.534-2.283-1.787-5.193-0.671-7.707l4.648-10.465
    l-5.566-5.566l-10.47,4.65c-2.514,1.115-5.424,0.863-7.706-0.67c-7.965-5.347-16.755-8.991-26.128-10.832
    c-2.699-0.529-4.937-2.409-5.925-4.976l-4.111-10.681h-7.872l-4.111,10.681c-0.988,2.566-3.226,4.446-5.925,4.976
    c-9.373,1.841-18.163,5.485-26.128,10.832c-2.282,1.532-5.194,1.784-7.706,0.67l-10.47-4.65l-5.566,5.566l4.649,10.469
    c1.116,2.514,0.863,5.424-0.67,7.707c-5.348,7.963-8.992,16.754-10.833,26.129c-0.529,2.699-2.409,4.937-4.976,5.925l-10.68,4.111
    v7.871l10.676,4.109c2.567,0.987,4.446,3.225,4.977,5.923c1.845,9.385,5.489,18.178,10.834,26.135
    c1.534,2.283,1.787,5.194,0.671,7.708l-4.648,10.466l5.566,5.565l10.47-4.65c2.514-1.116,5.424-0.862,7.706,0.67
    c7.964,5.347,16.755,8.991,26.129,10.833c2.699,0.53,4.936,2.409,5.924,4.976l4.111,10.68h7.872l4.109-10.676
    c0.987-2.566,3.225-4.446,5.924-4.976c9.382-1.843,18.174-5.488,26.133-10.834c2.282-1.534,5.194-1.787,7.708-0.671l10.466,4.648
    l5.566-5.566l-4.65-10.47c-1.116-2.513-0.863-5.423,0.67-7.706c5.347-7.964,8.991-16.755,10.833-26.129
    C251.402,313.829,253.281,311.593,255.848,310.604z M227.939,302.558c0,26.336-21.427,47.762-47.763,47.762
    s-47.762-21.426-47.762-47.762s21.426-47.763,47.762-47.763S227.939,276.222,227.939,302.558z M211.939,302.558
    c0-17.514-14.249-31.763-31.763-31.763s-31.762,14.249-31.762,31.763s14.248,31.762,31.762,31.762S211.939,320.071,211.939,302.558z
     M252.175,132.004c1.51-2.945,4.677-4.66,7.967-4.308l8.249,0.878c3.938-4.363,8.407-8.161,13.356-11.351l0.461-8.29
    c0.183-3.305,2.382-6.154,5.531-7.17l13.286-4.285c3.152-1.016,6.601,0.012,8.68,2.587l5.219,6.461
    c5.881-0.303,11.728,0.169,17.47,1.407l6.184-5.532c2.466-2.207,6.036-2.666,8.981-1.158l12.425,6.365
    c2.945,1.509,4.657,4.676,4.308,7.966l-0.878,8.251c4.361,3.937,8.159,8.406,11.349,13.355l8.293,0.461
    c3.304,0.184,6.153,2.382,7.169,5.531l4.285,13.286c1.017,3.15-0.012,6.601-2.587,8.68l-6.458,5.216
    c0.304,5.879-0.168,11.728-1.408,17.475l5.53,6.18c2.206,2.467,2.667,6.037,1.158,8.982l-6.365,12.426
    c-1.51,2.947-4.688,4.653-7.967,4.308l-8.25-0.878c-3.937,4.359-8.406,8.158-13.355,11.348l-0.461,8.292
    c-0.183,3.304-2.382,6.154-5.531,7.17l-13.286,4.286c-0.808,0.261-1.636,0.387-2.455,0.387c-2.375,0.001-4.679-1.059-6.225-2.974
    l-5.216-6.458c-5.88,0.305-11.729-0.168-17.475-1.409l-6.181,5.531c-2.467,2.206-6.037,2.666-8.982,1.158l-12.425-6.365
    c-2.945-1.509-4.657-4.676-4.308-7.966l0.878-8.251c-4.359-3.937-8.157-8.406-11.349-13.355l-8.292-0.461
    c-3.305-0.183-6.154-2.382-7.17-5.531l-4.285-13.286c-1.017-3.15,0.012-6.601,2.587-8.68l6.458-5.216
    c-0.304-5.88,0.168-11.729,1.409-17.475l-5.531-6.181c-2.207-2.467-2.667-6.037-1.158-8.982L252.175,132.004z M258.958,191.278
    l0.913,2.83l7.043,0.392c2.745,0.152,5.22,1.703,6.553,4.107c3.311,5.971,7.694,11.13,13.029,15.334
    c2.159,1.702,3.294,4.395,3.003,7.129l-0.745,7.007l2.647,1.355l5.248-4.696c2.05-1.832,4.898-2.487,7.542-1.728
    c6.537,1.877,13.286,2.424,20.057,1.617c0.315-0.037,0.631-0.056,0.943-0.056c2.399,0,4.693,1.08,6.223,2.974l4.43,5.485
    l2.831-0.914l0.392-7.043c0.152-2.746,1.704-5.221,4.109-6.554c5.969-3.309,11.127-7.691,15.332-13.027
    c1.701-2.16,4.392-3.295,7.13-3.004l7.006,0.746l1.356-2.648l-4.696-5.247c-1.834-2.05-2.486-4.897-1.728-7.541
    c1.875-6.538,2.419-13.286,1.616-20.058c-0.324-2.731,0.778-5.438,2.918-7.166l5.485-4.431l-0.913-2.831l-7.044-0.392
    c-2.745-0.152-5.22-1.704-6.553-4.108c-3.308-5.968-7.691-11.126-13.028-15.332c-2.159-1.702-3.294-4.395-3.003-7.129l0.745-7.007
    l-2.647-1.356l-5.251,4.698c-2.048,1.832-4.896,2.489-7.54,1.728c-6.534-1.875-13.284-2.418-20.056-1.616
    c-2.729,0.326-5.436-0.777-7.164-2.918l-4.433-5.487l-2.83,0.913l-0.392,7.042c-0.152,2.746-1.704,5.222-4.11,6.555
    c-5.967,3.306-11.125,7.688-15.332,13.027c-1.702,2.16-4.39,3.292-7.13,3.004l-7.005-0.745l-1.355,2.647l4.696,5.248
    c1.834,2.05,2.486,4.898,1.728,7.542c-1.876,6.536-2.42,13.284-1.617,20.057c0.324,2.731-0.778,5.438-2.918,7.166L258.958,191.278z
     M282.648,185.2c-3.069-9.517-2.248-19.659,2.311-28.559c9.41-18.371,32.011-25.661,50.387-16.249
    c8.899,4.56,15.491,12.311,18.561,21.827c3.068,9.518,2.248,19.659-2.312,28.559c-4.559,8.899-12.311,15.491-21.827,18.561
    c-3.783,1.22-7.667,1.826-11.53,1.826c-5.855,0-11.666-1.39-17.028-4.137C292.31,202.47,285.718,194.717,282.648,185.2z
     M297.876,180.289c1.757,5.45,5.531,9.889,10.628,12.499c5.096,2.609,10.901,3.083,16.353,1.323
    c5.449-1.757,9.888-5.531,12.498-10.628c2.611-5.096,3.081-10.903,1.324-16.353c-1.758-5.449-5.532-9.888-10.628-12.498
    c-3.119-1.598-6.453-2.355-9.738-2.355c-7.795,0-15.322,4.259-19.113,11.659C296.589,169.032,296.118,174.84,297.876,180.289z
     M410.112,291.807l-2.675,6.022c2.36,4.166,4.188,8.576,5.465,13.184l6.145,2.365c3.089,1.188,5.127,4.156,5.127,7.466v12.027
    c0,3.31-2.037,6.277-5.126,7.466l-6.147,2.366c-1.277,4.604-3.104,9.013-5.465,13.179l2.677,6.026
    c1.343,3.024,0.686,6.563-1.654,8.903l-8.504,8.505c-2.34,2.342-5.881,2.997-8.904,1.655l-6.023-2.676
    c-4.167,2.36-8.576,4.188-13.183,5.466l-2.365,6.145c-1.188,3.088-4.156,5.126-7.466,5.126h-12.027c-3.31,0-6.277-2.037-7.466-5.126
    l-2.366-6.147c-4.604-1.277-9.013-3.104-13.18-5.464l-6.025,2.677c-3.023,1.342-6.563,0.686-8.904-1.654l-8.505-8.505
    c-2.34-2.341-2.997-5.88-1.654-8.904l2.675-6.022c-2.359-4.166-4.188-8.576-5.465-13.184l-6.145-2.365
    c-3.089-1.188-5.127-4.156-5.127-7.466v-12.027c0-3.31,2.038-6.277,5.127-7.466l6.146-2.366c1.276-4.604,3.104-9.014,5.464-13.18
    l-2.676-6.025c-1.343-3.024-0.686-6.563,1.654-8.904l8.504-8.504c2.339-2.341,5.879-2.999,8.904-1.654l6.026,2.676
    c4.166-2.359,8.575-4.187,13.18-5.464l2.366-6.147c1.188-3.089,4.156-5.126,7.466-5.126h12.026c3.31,0,6.277,2.037,7.466,5.126
    l2.366,6.147c4.604,1.277,9.013,3.104,13.179,5.464l6.026-2.676c3.025-1.343,6.564-0.686,8.903,1.654l8.505,8.504
    C410.798,285.242,411.455,288.782,410.112,291.807z M403.222,324.431c-2.567-0.987-4.447-3.226-4.977-5.924
    c-1.101-5.604-3.278-10.856-6.472-15.611c-1.533-2.283-1.786-5.193-0.67-7.707l2.156-4.855l-0.736-0.737l-4.859,2.158
    c-2.515,1.116-5.423,0.862-7.705-0.669c-4.76-3.194-10.011-5.372-15.608-6.472c-2.698-0.53-4.936-2.409-5.924-4.976l-1.907-4.955
    h-1.042l-1.907,4.955c-0.988,2.566-3.226,4.445-5.924,4.976c-5.599,1.1-10.851,3.277-15.609,6.472
    c-2.282,1.53-5.191,1.784-7.705,0.669l-4.858-2.157l-0.736,0.736l2.157,4.858c1.116,2.514,0.863,5.424-0.67,7.707
    c-3.194,4.757-5.371,10.008-6.47,15.606c-0.53,2.699-2.41,4.937-4.978,5.925l-4.954,1.907v1.041l4.952,1.906
    c2.567,0.987,4.447,3.226,4.977,5.924c1.101,5.604,3.278,10.856,6.472,15.61c1.534,2.283,1.787,5.194,0.671,7.708l-2.157,4.856
    l0.736,0.736l4.858-2.158c2.513-1.115,5.422-0.863,7.705,0.669c4.761,3.194,10.012,5.372,15.609,6.472
    c2.698,0.53,4.936,2.409,5.924,4.976l1.907,4.955h1.042l1.906-4.952c0.987-2.566,3.226-4.446,5.924-4.976
    c5.602-1.101,10.854-3.278,15.611-6.473c2.282-1.532,5.194-1.786,7.707-0.67l4.855,2.157l0.736-0.736l-2.158-4.859
    c-1.116-2.513-0.863-5.423,0.67-7.706c3.194-4.759,5.372-10.01,6.472-15.607c0.53-2.698,2.409-4.936,4.976-5.924l4.955-1.907v-1.042
    L403.222,324.431z M389.358,326.857c0,18.395-14.965,33.359-33.359,33.359s-33.36-14.965-33.36-33.359s14.966-33.359,33.36-33.359
    S389.358,308.463,389.358,326.857z M373.358,326.857c0-9.572-7.787-17.359-17.359-17.359s-17.36,7.787-17.36,17.359
    s7.788,17.359,17.36,17.359S373.358,336.43,373.358,326.857z"
        ></path>
      </svg>
    ),
  },
  {
    color: "#FF366B",
    title: "Tools & Safety",
    content:
      "Maecena nec odio et ante tcidunt tempus. Donec vitae sapien utbero venenatis faucibus. ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="50px"
        width="44px"
        data-name="Layer 1"
        viewBox="0 0 32 32"
        id="safety-costume"
      >
        <path d="M30.683,11.976l-1.659-1.649A3.525,3.525,0,0,1,28,7.85V2.5A2.5,2.5,0,0,0,25.5,0H21.94a.5.5,0,0,0-.27.079A5.051,5.051,0,0,1,19.1.88a4.958,4.958,0,0,1-2.823-.8A.5.5,0,0,0,16,0H12.5A2.5,2.5,0,0,0,10,2.5V7.85a3.524,3.524,0,0,1-1.022,2.476L7.316,11.977A4.532,4.532,0,0,0,6,15.16V20H5.98a1.393,1.393,0,0,0-1.36,1.42v.361A5.971,5.971,0,0,0,1.15,27.22V28.6A1.5,1.5,0,0,0,0,30.06v.44A1.5,1.5,0,0,0,1.5,32h30a.5.5,0,0,0,.5-.5V15.16A4.533,4.533,0,0,0,30.683,11.976ZM2.15,27.22a4.971,4.971,0,0,1,2.47-4.31v2.48a.5.5,0,0,0,1,0V21.42A.389.389,0,0,1,5.98,21H10.02a.389.389,0,0,1,.36.42v3.97a.5.5,0,0,0,1,0v-2.48a4.971,4.971,0,0,1,2.47,4.31v1.34H2.15ZM6.5,31h-5a.5.5,0,0,1-.5-.5v-.44a.5.5,0,0,1,.5-.5h13a.5.5,0,0,1,.5.5v.44a.5.5,0,0,1-.5.5Zm12,0H15.908A1.483,1.483,0,0,0,16,30.5v-.44A1.5,1.5,0,0,0,14.85,28.6V28H18.5Zm0-4H14.834a5.987,5.987,0,0,0-.42-2H18.5Zm0-3H13.916a5.992,5.992,0,0,0-2.537-2.219V21.42a1.456,1.456,0,0,0-.068-.42H18.5Zm0-4H7V18H18.5Zm0-3H7V15.16a3.524,3.524,0,0,1,1.022-2.476l1.661-1.651A4.532,4.532,0,0,0,11,7.85V2.5A1.5,1.5,0,0,1,12.5,1h2.179L18.5,12.829ZM15.73,1h.125a6.119,6.119,0,0,0,3.271.88A6.052,6.052,0,0,0,22.083,1h.181L19,11.122ZM31,31H19.5V28H31Zm0-4H19.5V25H31Zm0-3H19.5V21H31Zm0-4H19.5V18H31Zm0-3H19.5V12.828L23.314,1H25.5A1.5,1.5,0,0,1,27,2.5V7.85a4.533,4.533,0,0,0,1.317,3.185l1.659,1.649A3.525,3.525,0,0,1,31,15.16Z"></path>
      </svg>
    ),
  },
];
interface AffilationType {
  header_title: string;
  header_description: string;
  animated_title: string;
  post_title: string;
  post_image: string;
  post_description: string;
}
interface pageContentType {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  "our-affilations": string;
  health_img: number;
}
interface HealthAndSafetyType {
  pageContent: pageContentType;
  affilations: AffilationType[];
}
const HealthSafetyHome: React.FC<HealthAndSafetyType> = ({
  pageContent,
  affilations,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [HealthSafetyHome]);
  [];
  const size = useSize();
  return (
    <>
      <motion.section
        {...staggerParent}
        className={`bg-[#080c3c] md:px-12  relative overflow-x-hidden`}
      >
        <motion.div
          className="absolute"
          style={{
            position: "absolute",
            top: "0%",
            left: "0%",
            transform: "translate(-50%, -50%)",
            zIndex: 5,
          }}
          initial={{ y: 300 }}
          animate={{ x: 100, opacity: 1 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <Image src={circle} alt="image" />
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            position: "absolute",
            top: "40%",
            left: "20%",

            transform: "translate(-50%, -50%)",
            zIndex: 5,
          }}
          animate={{ x: "50%" }}
          initial={{ x: "-100%", y: "-100%" }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <Image src={square} alt="image" />
        </motion.div>
        <motion.div
          className="absolute"
          style={{
            position: "absolute",
            top: "10%",
            left: "30%",

            transform: "translate(-50%, -50%)",
            zIndex: 5,
          }}
          animate={{ x: "150%" }}
          initial={{ x: "-150%", y: "-100%" }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <Image src={tri} alt="image" />
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            position: "absolute",
            top: "0%",
            left: "70%",
            right: "0%",
            transform: "translate(-50%, -50%)",
            zIndex: 5,
          }}
          initial={{ y: 200, x: -100 }}
          animate={{ y: 140, opacity: 1 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <Image src={circle} alt="image" />
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            position: "absolute",
            top: "10%",
            left: "70%",
            right: "0%",
            transform: "translate(-50%, -50%)",
            zIndex: 5,
          }}
          animate={{ y: "150%" }}
          initial={{ x: "-150%", y: "-150%" }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <Image src={tri} alt="image" />
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            position: "absolute",
            top: "40%",
            left: "70%",
            right: "0%",
            transform: "translate(-50%, -50%)",
            zIndex: 5,
          }}
          animate={{ x: "50%" }}
          initial={{ x: "-100%", y: "-100%" }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <Image src={square} alt="image" />
        </motion.div>
        <motion.div className="flex flex-col lg:flex-row justify-center items-center">
          <div className={` text-black relative `}>
            <div
              className={`mx-auto flex flex-col justify-center max-lg:text-center lg:py-10 rounded-2xl `}
            >
              <div className="">
                <div
                  className={`text-[22px] md:text-[26px] lg:text-3xl xl:text-[35px]`}
                >
                  <div className={`block`}>
                    <motion.h1
                      variants={leftToRightAnimation}
                      className="xl:text-xl lg:text-lg text-lg py-4 lg:pl-32 text-white"
                    >
                      {pageContent?.animated_title}
                    </motion.h1>
                    <div className="font-serif text-[#ff366b] text-3xl lg:pl-32 lg:text-4xl">
                      {pageContent?.header_title}
                    </div>
                  </div>
                  <motion.p
                    variants={leftToRightAnimation}
                    className={`block xl:text-xl lg:text-lg text-sm lg:pl-32 px-2 py-4 text-white lg:w-[70%]`}
                  >
                    {pageContent?.header_description}
                  </motion.p>
                  <div className="grid  sm:grid-cols-2 lg:grid-cols-4 justify-center items-start lg:my-10 lg:pl-8">
                    {workData?.map((value, ind) => (
                      <div
                        className="relative text-center flex flex-col justify-center items-center "
                        key={ind}
                      >
                        {workData?.length - 1 === ind ? null : (
                          <div className="hidden lg:block absolute -top-[30px] left-[100%] -translate-x-1/2 h-[30px] w-[60px]">
                            <Image src={WorkArrow} alt="arrow work" />
                          </div>
                        )}
                        <div className="relative">
                          <div
                            className={`w-[70px] h-[70px] rounded-full  bg-[#FF366B] mb-[35px] circleAnim`}
                          >
                            <div className="absolute top-[10%] left-[14%]">
                              {value.icon}
                            </div>
                          </div>
                        </div>
                        <div>
                          <h1 className="w-[100px] xl:text-xl lg:text-lg text-sm font-medium mb-[20px] text-white">
                            {value.title}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <motion.div variants={rightToLeftAnimation} className="p-4 lg:py-10">
            <Image
              src={hse}
              alt="image"
              className="w-[250px] lg:w-full h-[250px] lg:h-full"
            ></Image>
          </motion.div>
        </motion.div>
      </motion.section>
      <div className="py-12">
        <motion.div
          variants={topToBottomAnimation}
          className="font-serif text-red-600 text-4xl text-bold p-2 flex justify-center "
        >
          {pageContent?.["our-affilations"]}
        </motion.div>
        <motion.div
          variants={rightToLeftAnimation}
          className="flex flex-wrap px-4 lg:gap-16 justify-center"
        >
          {affilations.map((value) => {
            return (
              <>
                <Image
                  src={value?.post_image}
                  alt="image"
                  width={size && size < 1024 ? 120 : 180}
                  height={size && size < 1024 ? 120 : 180}
                  className="object-scale-down p-2"
                />
              </>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default HealthSafetyHome;
