.. _doc_skinnedmeshrender:

SkinnedMeshRender
=================

**SkinnedMeshRender** is a component for rendering skinned meshes with animation. It enables the creation of characters and other animated objects with deformable geometry.

Overview
--------

SkinnedMeshRender extends MeshRenderer functionality to work with skeletal animation. It supports:

*   Mesh deformation based on skeleton pose
*   GPU skinning for performance
*   Blend shapes (morph targets)
*   Multiple animation layers
*   Animation blending

Component Properties
--------------------

**mesh** (Mesh)
    Reference to the skinned mesh. The mesh must contain bone weight data (bone weights) and bone indices for proper deformation.
    
    *   Type: Mesh resource
    *   Editor: Asset picker
    *   Can be changed at runtime via ``setMesh()``

**materials** (Material[])
    Array of materials for each sub-mesh. If there are fewer materials than sub-meshes, the remaining sub-meshes are not rendered.
    
    *   Type: array of Material resources
    *   Editor: Asset picker
    *   Can be changed at runtime via ``setMaterials()``

**armature** (Armature)
    Skeleton (armature) used for mesh deformation. Armature contains the bone hierarchy and their transformations. Usually loaded together with the mesh from the file, but can be assigned separately.
    
    *   Type: Armature component (must be attached to the same actor or one of its parents)
    *   Editor: Component picker
    *   Default: ``nullptr`` (skeleton is extracted from the mesh)

**boundsCenter** (Vector3)
    Center of the bounding box for the skinned mesh in local space.
    
    *   Used for frustum culling and occlusion culling
    *   Can be manually adjusted for culling optimization
    *   Default: automatically calculated based on mesh geometry

**boundsExtent** (Vector3)
    Half-size of the bounding box (extent) along each axis. Together with boundsCenter forms an AABB (Axis-Aligned Bounding Box).
    
    *   Range: positive values
    *   Default: automatically calculated based on mesh geometry

**castShadows** (bool) — *currently not implemented*
    Determines whether the object casts shadows.

**receiveShadows** (bool) — *currently not implemented*
    Determines whether the object receives shadows.

**enabled** (bool)
    Enables/disables component rendering.
    Default: ``true``.

**layer** (int)
    Rendering layer. Used for camera culling mask.
    Default: ``0``.

.. note::
    For SkinnedMeshRender to work correctly, the Armature component must be on the same actor or one of its parents. If armature is not explicitly specified, it will be automatically found in the hierarchy.

Usage Examples
--------------

**Basic Character Creation**

.. code-block:: cpp

    // Create an actor for the character
    Actor* character = Engine::composeActor<SkinnedMeshRender>("Hero");
    character->setPosition(Vector3(0.0f, 0.0f, 0.0f));
    
    // Add SkinnedMeshRender
    SkinnedMeshRender* skin = character->getComponent<SkinnedMeshRender>();
    skin->setMesh(Engine::loadResource<Mesh>("characters/hero.gltf/Mesh01"));
    skin->setMaterial(Engine::loadResource<Material>("characters/hero.mat"));
    
    // Skeleton (armature) is loaded automatically from the mesh or can be assigned separately
    // Armature is usually located on the same actor or a child object

**Configuring Bounds for Optimization**

.. code-block:: cpp

    SkinnedMeshRender* skin = character->getComponent<SkinnedMeshRender>();
    
    // Automatic bounds (default)
    Vector3 autoCenter = skin->getBoundsCenter();
    Vector3 autoExtent = skin->getBoundsExtent();
    
    // Manual adjustment for better culling
    // For example, if the character is very tall, expand bounds along Y
    skin->setBoundsCenter(Vector3(0.0f, 1.5f, 0.0f));
    skin->setBoundsExtent(Vector3(1.0f, 2.0f, 1.0f));

**Changing Skins (Materials)**

.. code-block:: cpp

    // Load different material variants
    Material* defaultSkin = Engine::loadResource<Material>("characters/default.mat");
    Material* redSkin = Engine::loadResource<Material>("characters/red.mat");
    Material* blueSkin = Engine::loadResource<Material>("characters/blue.mat");
    
    SkinnedMeshRender* skin = getComponent<SkinnedMeshRender>();
    
    // Change appearance
    void setCharacterColor(int color) {
        switch (color) {
            case 0: skin->setMaterial(defaultSkin); break;
            case 1: skin->setMaterial(redSkin); break;
            case 2: skin->setMaterial(blueSkin); break;
        }
    }

**Using a Separate Armature Component**

.. code-block:: cpp

    // Sometimes the skeleton can be a separate object
    Actor* skeletonActor = Engine::composeActor<Armature>("Skeleton");
    Armature* armature = skeletonActor->getComponent<Armature>();
    armature->setBindPose(Engine::loadResource<BindPose>("characters/hero_mesh.gltf/pose"));
    
    // Create character attached to the skeleton
    Actor* character = Engine::composeActor<SkinnedMeshRender>("Skeleton", skeletonActor);
    SkinnedMeshRender* skin = character->getComponent<SkinnedMeshRender>();
    skin->setMesh(Engine::loadResource<Mesh>("characters/hero_mesh.gltf/Mesh01"));
    skin->setArmature(armature);  // Explicitly specify the skeleton
    skin->setMaterial(Engine::loadResource<Material>("characters/hero.mat"));

**Blend Shapes (Morph Targets)** — *currently not implemented*

.. code-block:: cpp

    // For meshes with blend shapes (e.g., facial expressions)
    SkinnedMeshRender* face = getComponent<SkinnedMeshRender>();
    
    // Set blend shape weight
    face->setBlendShapeWeight("smile", 0.5f);   // 50% smile
    face->setBlendShapeWeight("blink", 0.0f);   // eyes open
    
    // Smooth expression change
    void updateFacialExpression(float deltaTime) {
        float target = Input::isKeyPressed(Input::KEY_SPACE) ? 1.0f : 0.0f;
        m_currentSmile += (target - m_currentSmile) * deltaTime * 5.0f;
        face->setBlendShapeWeight("smile", m_currentSmile);
    }

**Dynamic Mesh Switching**

.. code-block:: cpp

    class CharacterCustomization : public Actor {
    public:
        void start() override {
            m_skin = addComponent<SkinnedMeshRender>();
            
            // Load different outfit variants
            m_armorMesh = Engine::loadResource<Mesh>("characters/armor.gltf");
            m_robeMesh = Engine::loadResource<Mesh>("characters/robe.gltf");
            m_leatherMesh = Engine::loadResource<Mesh>("characters/leather.gltf");
            
            m_skin->setMesh(m_armorMesh);
            m_skin->setMaterial(armorMaterial);
        }
        
        void equipArmor() {
            m_skin->setMesh(m_armorMesh);
        }
        
        void equipRobe() {
            m_skin->setMesh(m_robeMesh);
        }
       
        SkinnedMeshRender* m_skin = nullptr;
        Mesh* m_armorMesh = nullptr;
        Mesh* m_robeMesh = nullptr;
        Mesh* m_leatherMesh = nullptr;
    };

Recommendations
---------------

**Performance Optimization**
    *   Limit the number of bones per character (recommended up to 64 on mobile, up to 256 on desktop)
    *   For large numbers of characters, use LOD with transition to static meshes at long distances
    *   Configure boundsCenter and boundsExtent for accurate culling — too large bounds reduce culling effectiveness, too small bounds may lead to premature culling

**Animations**
    *   Use compression for animation clips (import settings)
    *   For background characters, use fewer bones and simpler animations
    *   Preload animations that will be used

**Blend Shapes** — *currently not implemented*
    *   Blend shapes consume more memory and GPU time
    *   Use only for critical expressions (face)
    *   Limit the number of active blend shapes to 8-16

**Armature Placement**
    *   Armature must be on the same actor or on a parent object
    *   If animation does not play, verify that armature is correctly assigned
    *   For multiple characters with the same skeleton, one armature can be reused (if they use the same animations)

**Bounds**
    *   After changing the mesh, always check the bounds — they may change
    *   Use ``resetBounds()`` for automatic recalculation
    *   For animated characters, bounds may change dynamically during animation (arm swings, jumps). Consider manual configuration with margin.

Common Issues and Solutions
---------------------------

**Character Does Not Render**
    *   Verify that the mesh is loaded and contains bone weights
    *   Ensure a material is assigned
    *   Check that armature is correctly assigned (automatically or manually)
    *   Ensure the component is enabled (enabled = true)

**Animation Does Not Play**
    *   Verify that Import Animation was enabled when importing the model
    *   Ensure AnimationClip is loaded and assigned
    *   Check that the skeleton in the mesh matches the armature
    *   Ensure the armature is being updated (typically via the Animation component)

**Mesh Deformation Is Incorrect**
    *   Verify that the mesh contains correct bone weights and bone indices
    *   Ensure the number of bones does not exceed the limit (256 on desktop, 64 on mobile)
    *   Check that bone names in the mesh match names in the armature

**Object Is Culled by Camera**
    *   Check the bounds (boundsCenter and boundsExtent) — they may be too small
    *   Call resetBounds() for automatic recalculation
    *   Temporarily disable culling for debugging: ``camera->setCullingMask(-1)``