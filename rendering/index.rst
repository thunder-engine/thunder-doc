.. _doc_rendering:

Rendering
=========

.. tip:: The Rendering module is a core part of Thunder Engine and is always included. It provides the complete visual pipeline for your game.

The Rendering module is responsible for transforming 3D scenes into 2D images displayed on the screen. It handles everything from camera management to material rendering, lighting, and post-processing effects.

Module Overview
---------------

The Rendering module provides:

- **Camera** — perspective and orthographic cameras with customizable parameters
- **Material system** — PBR (Physically Based Rendering) materials with textures and shaders
- **Mesh rendering** — static and skinned meshes with LOD support
- **Lighting** — directional, point, and spot lights with shadows
- **VFX** — visual effects for particles, decals, and other dynamic elements
- **Post-processing** — effects like bloom, depth of field, color grading
- **Render pipeline** — configurable rendering pipeline with forward and deferred paths

.. toctree::
   :maxdepth: 2

   components/camera
   geometry/index
   lighting/index
   vfx/index
   pipeline