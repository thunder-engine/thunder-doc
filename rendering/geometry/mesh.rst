.. _doc_mesh:

Mesh Resource
=============

**Mesh** is a resource that contains geometric data for rendering. It stores vertices, indices, and metadata necessary for drawing 3D objects.

Overview
--------

Mesh is the fundamental resource for all visible objects in the scene. It is loaded from 3D model files (OBJ, FBX, GLTF) and can be used by multiple rendering components simultaneously.

Usage Examples
--------------

**Loading a Mesh from a File**

.. code-block:: cpp

    // Simple loading
    Mesh* mesh = Engine::loadResource<Mesh>("models/character.fbx/Mesh01");
    
    if (mesh) {
        LOG_INFO("Loaded mesh with %d vertices", mesh->vertices().size());
        LOG_INFO("Bounds: %f, %f, %f", 
                 mesh->bound().extent.x,
                 mesh->bound().extent.y,
                 mesh->bound().extent.z);
    }

**Creating a Procedural Mesh**

.. code-block:: cpp

    Mesh* createPlane(float width, float height) {
        Mesh* mesh = Engine::objectCreate<Mesh>();
        
        Vector3Vector vertices;
        Vector3Vector normals;
        Vector2Vector uvs;
        IndexVector indices;
        
        float halfWidth = width * 0.5f;
        float halfHeight = height * 0.5f;
        
        // Vertices
        vertices.push_back(Vector3(-halfWidth, 0, -halfHeight));
        vertices.push_back(Vector3( halfWidth, 0, -halfHeight));
        vertices.push_back(Vector3( halfWidth, 0,  halfHeight));
        vertices.push_back(Vector3(-halfWidth, 0,  halfHeight));
        
        // Normals (all pointing up)
        for (int i = 0; i < 4; i++) {
            normals.push_back(Vector3(0, 1, 0));
        }
        
        // UV coordinates
        uvs.push_back(Vector2(0, 0));
        uvs.push_back(Vector2(1, 0));
        uvs.push_back(Vector2(1, 1));
        uvs.push_back(Vector2(0, 1));
        
        // Indices (two triangles)
        indices.push_back(0);
        indices.push_back(1);
        indices.push_back(2);
        
        indices.push_back(0);
        indices.push_back(2);
        indices.push_back(3);
        
        mesh->setVertices(vertices);
        mesh->setNormals(normals);
        mesh->setUVs(uvs);
        mesh->setIndices(indices);
        
        return mesh;
    }

**Releasing the Resource**

.. code-block:: cpp

    // Mesh is automatically unloaded when the resource manager is destroyed
    // But it can be forcibly unloaded
    Engine::unloadResource(mesh);

Recommendations
---------------

**Data Optimization**
    *   Remove unused vertex attributes (if colors or secondary UVs are not needed)

**Memory Management**
    *   Meshes consume video memory. Unload unused meshes
    *   Use streaming loading for large levels
    *   Common meshes (e.g., "cube", "sphere") can be reused