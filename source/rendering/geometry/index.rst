.. _doc_geometry:

Geometry
========

**Meshes** represent geometric data in Thunder Engine. The mesh system provides loading, rendering, and optimization of 3D geometry for static and animated objects.

Overview
--------

Mesh is the fundamental building block for all visible objects in the scene. The system supports:

* **Static meshes** — for buildings, landscapes, props
* **Skinned meshes** — for characters and animated objects
* **Procedural meshes** — runtime-generated geometry
* **Optimizations** — LOD, batching, instance rendering
* **File formats** — OBJ, FBX, GLTF

Core Components
---------------

The mesh system consists of several key elements:

.. toctree::
   :maxdepth: 2

   mesh
   meshrender
   skinnedmeshrender

**Mesh Resource**
    A resource containing vertex and index data. Loaded from OBJ, FBX, or GLTF files.

**MeshRenderer**
    A component for rendering static meshes. Supports materials, shadows, and culling.

**SkinnedMeshRender**
    A component for rendering skinned meshes with animation.

Mesh Types
----------

**Static Mesh**
    Geometry that does not change during gameplay. Optimized for static objects:
    
    - Buildings, landscapes, props
    - Supports static batching
    - Higher performance

**Skinned Mesh**
    Geometry that deforms under the influence of skeletal animation:
    
    - Characters, animals, animated objects
    - Contains vertex weight data (bone weights)
    - Updated on GPU for performance

**Dynamic Mesh**
    Geometry generated at runtime:
    
    - Terrain, water, procedural objects
    - Can be updated dynamically
    - Requires manual buffer management

File Formats
------------

Thunder Engine supports the following 3D model formats:

=============== ==============================================================
Format          Features
=============== ==============================================================
**OBJ**         Simple text format. Suitable for static geometry.
                Does not support animation or skeletons.
**FBX**         Industry standard. Supports animation, skeletons,
                morphing, cameras, lights. Recommended for complex assets.
**GLTF/GLB**    Modern format for real-time applications.
                Efficient loading, PBR support, animations.
=============== ==============================================================

When importing assets, all data will be converted to Thunder Engine's internal formats:

- All geometry will be converted to Mesh assets
- Animation will be converted to AnimationClip
- Material assets will also be created (currently not available)

All assets can be reused independently from each other in your projects.

Import Settings
---------------

The following settings are available when importing a 3D model:

**Use Custom Scale** (bool)
    Enables the use of custom scale during import.
    
    *   ``true`` — use the value from the ``Custom Scale`` field
    *   ``false`` — use the original model scale
    
    Default: ``false``.

**Custom Scale** (float)
    Model scale during import. Applied only if ``Use Custom Scale = true``.
    
    *   Range: from ``0.001`` to ``1000.0``
    *   Default: ``1.0``
    
    .. tip::
        Use for converting units (e.g., from centimeters to meters: ``0.01``).

**Import Color** (bool)
    Import vertex colors from the model.
    
    *   ``true`` — vertex colors will be loaded and available in shaders
    *   ``false`` — vertex colors are ignored
    
    Default: ``true``.

**Import Normals** (bool)
    Import normals from the model.
    
    *   ``true`` — normals are loaded from the file
    *   ``false`` — normals are not imported (can be generated later)
    
    Default: ``true``.
    
    .. note::
        Normals are required for proper lighting. If normals are missing from the model, it is recommended to enable their generation.

**Import Animation** (bool)
    Import animation data from the model.
    
    *   ``true`` — animations will be extracted and saved as AnimationClip
    *   ``false`` — animations are ignored (static geometry only)
    
    Default: ``true``.

**Compress Animation** (enum)
    Animation data compression method.
    
    Available values:
    
    *   ``None`` — no compression, maximum precision
    *   ``KeyframeReduction`` — removes redundant keyframes
    *   ``CurveOptimization`` — optimizes curves with specified precision
    
    Default: ``KeyframeReduction``.
    
    .. tip::
        Use compression to reduce animation file size. For background characters, more aggressive compression can be used.

**Position Error** (float)
    Maximum allowable position error during animation compression (in world units).
    
    *   Smaller value = higher precision, larger file size
    *   Larger value = lower precision, smaller file size
    
    Range: from ``0.0001`` to ``1.0``.
    Default: ``0.001``.

**Rotation Error** (float)
    Maximum allowable rotation error during animation compression (in degrees).
    
    *   Smaller value = higher precision, larger file size
    *   Larger value = lower precision, smaller file size
    
    Range: from ``0.001`` to ``10.0``.
    Default: ``0.5``.

**Scale Error** (float)
    Maximum allowable scale error during animation compression.
    
    *   Smaller value = higher precision, larger file size
    *   Larger value = lower precision, smaller file size
    
    Range: from ``0.0001`` to ``1.0``.
    Default: ``0.001``.

Optimization Recommendations
----------------------------

**For Mobile Platforms**
    - Use meshes with < 10,000 triangles
    - Limit the number of skeletal bones to 32-64 per character
    - Enable LOD for all distant objects
    - Use animation compression with higher error values
    - Prefer static batching over dynamic

**For Desktop Platforms**
    - Meshes up to 100,000 triangles are acceptable
    - Up to 256 bones per skeleton
    - Use occlusion culling for complex scenes (not available in current version)
    - Instance rendering for repeated objects
    - Lower animation compression error values

**General Recommendations**
    - Minimize the number of materials per mesh
    - Use texture atlases to reduce material switching
    - Group static geometry
    - Regularly profile draw call counts
    - Use LOD for all objects with distance > 50
    - For animations, use KeyframeReduction compression with moderate error values

Common Issues and Solutions
---------------------------

**Mesh Does Not Render**
    - Verify that the mesh is loaded (mesh != nullptr)
    - Check that a material is assigned
    - Ensure the camera is looking at the object
    - Check the camera's near/far planes

**Low Performance with Many Meshes**
    - Enable static batching for static geometry
    - Use instance rendering for repeated objects
    - Reduce the number of materials
    - Enable LOD
    - Use occlusion culling

**Normal Issues**
    - Ensure Import Normals is enabled
    - Verify that normals are not zero
    - For smooth shading, use normal averaging

**Animations Play Incorrectly**
    - Verify that Import Animation is enabled
    - Ensure compression error values are not too high
    - Try disabling compression (Compress Animation = None) for testing
    - Check that the skeleton matches the mesh

**Animation File Size Too Large**
    - Increase Position Error, Rotation Error, Scale Error values
    - Use a more aggressive compression method (CurveOptimization)
    - Remove unused animation channels
    - Ensure the animation does not contain redundant keyframes