import React, { useEffect } from 'react'
import "./Home.css";
import * as THREE from "three";
const Home = () => {
    useEffect(() => { 
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGLRenderer({ canvas });


        const moonGeometry = new THREE.SphereGeometry(3, 16, 16);
        const moonMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        scene.add(moon);

        camera.position.z = 10;
        const animate = () => {
            requestAnimationFrame(animate);
            moon.rotation.y += 0.01;
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);
        };

        animate();
        

    },[])
  return (
    <div className="home">
          <canvas className="homeCanvas">
              
      </canvas>
    </div>
  );
}

export default Home
