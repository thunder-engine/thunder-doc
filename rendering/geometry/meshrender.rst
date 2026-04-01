.. _doc_meshrender:

MeshRender
==========

**MeshRender** is a component that renders a static mesh in the scene. It attaches to an actor and provides rendering of geometry with a specified material.

Overview
--------

MeshRender is the primary component for displaying static 3D objects. It supports:

- Rendering static meshes
- Multiple sub-meshes with different materials
- Shadows (cast/receive)
- Frustum culling
- Static batching (for optimization)

Component Properties
--------------------

**mesh** (Mesh)
    Reference to the Mesh resource to be rendered.
    Can be changed at runtime.

**materials** (Material[])
    Array of materials for each sub-mesh. If there are fewer materials than sub-meshes, the remaining sub-meshes are not rendered.

**castShadows** (bool) - currently not implemented
    Determines whether the object casts shadows.
    Default: ``true``.

**receiveShadows** (bool) - currently not implemented
    Determines whether the object receives shadows from other sources.
    Default: ``true``.

**enabled** (bool)
    Enables/disables component rendering.
    Default: ``true``.

Usage Examples
--------------

**Basic Creation**

.. code-block:: cpp

    // Create an actor
    Actor* cubeActor = Engine::composeActor<MeshRender>("Cube", Engine::world()->activeScene());
    
    // Add MeshRenderer
    MeshRenderer* renderer = cubeActor->getComponent<MeshRenderer>();
    renderer->setMesh(Engine::composeActor<Mesh>("primitives/cube.obj"));
    renderer->setMaterial(Engine::composeActor<Material>("materials/default.mat"));

**Configuring Materials for Sub-meshes**

.. code-block:: cpp

    Mesh* characterMesh = Engine::loadResource<Mesh>("characters/hero.gltf");
    // Assume the mesh has 3 sub-meshes: body, clothing, weapon
    
    MeshRenderer* renderer = addComponent<MeshRenderer>();
    renderer->setMesh(characterMesh);
    
    // Set materials for each sub-mesh
    renderer->setMaterials({ bodyMaterial, clothesMaterial, weaponMaterial });

**Dynamic Mesh Switching**

.. code-block:: cpp

    class ShapeSwitcher : public Actor {
    public:
        void start() override {
            m_renderer = addComponent<MeshRender>();
            
            // Load different meshes
            m_cube = Engine::loadResource<Mesh>("primitives/cube.obj");
            m_sphere = Engine::loadResource<Mesh>("primitives/sphere.obj");
            m_cylinder = Engine::loadResource<Mesh>("primitives/cylinder.obj");
            
            m_renderer->setMesh(m_cube);
        }
        
        void update(float deltaTime) override {
            // Change shape when spacebar is pressed
            if (Input::isKeyPressed(Input::KEY_SPACE)) {
                m_currentShape = (m_currentShape + 1) % 3;
                
                switch (m_currentShape) {
                    case 0: m_renderer->setMesh(m_cube); break;
                    case 1: m_renderer->setMesh(m_sphere); break;
                    case 2: m_renderer->setMesh(m_cylinder); break;
                }
            }
        }
        
    private:
        MeshRender* m_renderer = nullptr;
        Mesh* m_cube = nullptr;
        Mesh* m_sphere = nullptr;
        Mesh* m_cylinder = nullptr;
        int m_currentShape = 0;
    };

**Enabling/Disabling Rendering**

.. code-block:: cpp

    // Temporarily hide the object
    renderer->setEnabled(false);
    
    // Show it again later
    renderer->setEnabled(true);

Recommendations
---------------

**Optimization**
    - For static objects (that don't move), set the actor as static: ``actor->setStatic(true)``. This enables static batching.
    - Use a single material for the entire mesh if possible. Each additional material increases the number of draw calls.

**Shadows**
    - Disable shadows for small objects and objects that are far away
    - For mobile platforms, limit the number of objects with shadows

**Resource Management**
    - Meshes and materials are automatically managed by the resource manager
    - When an actor is destroyed, the component automatically releases references to resources