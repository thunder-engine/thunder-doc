.. _api_NavMeshSurface:

NavMeshSurface
==============

Inherited: :ref:`Component<api_Component>`

.. _api_NavMeshSurface_description:

Description
-----------

A navigation surface collects collider geometry from a scene or an actor hierarchy and converts it into a navigation mesh. The resulting mesh can be built synchronously with build() or asynchronously with buildAsync().

The surface can also include NavMeshLink connections while building. Its agentType() and geometrySource() determine which navigation configuration and source geometry are used.



.. _api_NavMeshSurface_public:

Public Methods
--------------

+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                 | :ref:`NavMeshSurface<api_NavMeshSurface_ae40351f>` ()                                                                                                   |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                 | :ref:`~NavMeshSurface<api_NavMeshSurface_c62a5e9f>` ()                                                                                                  |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`addBoxColliderGeometry<api_NavMeshSurface_fc351a02>` (BoxCollider * collider, Vector3Vector & outVertices, std::vector<int> & outIndices)         |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`addCapsuleColliderGeometry<api_NavMeshSurface_0ba56cf4>` (CapsuleCollider * collider, Vector3Vector & outVertices, std::vector<int> & outIndices) |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`addMeshColliderGeometry<api_NavMeshSurface_bfa175d2>` (MeshCollider * collider, Vector3Vector & outVertices, std::vector<int> & outIndices)       |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`addSphereColliderGeometry<api_NavMeshSurface_eb4f56a9>` (SphereCollider * collider, Vector3Vector & outVertices, std::vector<int> & outIndices)   |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                             int | :ref:`agentType<api_NavMeshSurface_376fc42d>` () const                                                                                                  |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            bool | :ref:`autoBuild<api_NavMeshSurface_60f31cda>` () const                                                                                                  |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            bool | :ref:`build<api_NavMeshSurface_8cb65d3e>` ()                                                                                                            |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`std::future<bool><api_std_future<bool>>` | :ref:`buildAsync<api_NavMeshSurface_54e03872>` ()                                                                                                       |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            bool | :ref:`buildNavMeshData<api_NavMeshSurface_37df8409>` (const Vector3Vector & vertices, const std::vector<int> & indices)                                 |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`clear<api_NavMeshSurface_3475cafd>` ()                                                                                                            |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            bool | :ref:`collectGeometry<api_NavMeshSurface_8d6a124c>` (Vector3Vector & outVertices, std::vector<int> & outIndices)                                        |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`drawGizmosSelected<api_NavMeshSurface_93d82be7>` ()                                                                                               |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                             int | :ref:`geometrySource<api_NavMeshSurface_aed8206b>` () const                                                                                             |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`loadUserData<api_NavMeshSurface_be4f7ca8>` (const VariantMap & data)                                                                              |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                   :ref:`NavMesh<api_NavMesh>` * | :ref:`navMesh<api_NavMeshSurface_82cbde16>` () const                                                                                                    |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`onNavMeshChanged<api_NavMeshSurface_1f35bd7c>` ()                                                                                                 |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                      VariantMap | :ref:`saveUserData<api_NavMeshSurface_b61583a7>` () const                                                                                               |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`setAgentType<api_NavMeshSurface_4259d1c7>` (int  type)                                                                                            |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`setAutoBuild<api_NavMeshSurface_cf8d52e4>` (bool  autoBuild)                                                                                      |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`setGeometrySource<api_NavMeshSurface_2a0d7c1e>` (int  source)                                                                                     |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`setNavMesh<api_NavMeshSurface_7e5ba329>` (NavMesh * navMesh)                                                                                      |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            void | :ref:`setTileSize<api_NavMeshSurface_baf38e6d>` (int  tileSize)                                                                                         |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                             int | :ref:`tileSize<api_NavMeshSurface_f381ad05>` () const                                                                                                   |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _api_NavMeshSurface_enums:

Public Enums
------------

.. _api_NavMeshSurface_GeometrySource:

**enum NavMeshSurface::GeometrySource**

Defines where the surface collects collider geometry from.

+--------------------------------------+-------+----------------------------------------------------+
|                             Constant | Value | Description                                        |
+--------------------------------------+-------+----------------------------------------------------+
|         NavMeshSurface::AllColliders | 0     | Collects enabled colliders from the scene.         |
+--------------------------------------+-------+----------------------------------------------------+
| NavMeshSurface::CollidersInHierarchy | 1     | Collects enabled colliders in the actor hierarchy. |
+--------------------------------------+-------+----------------------------------------------------+



.. _api_NavMeshSurface_static:

Static Methods
--------------

None

.. _api_NavMeshSurface_methods:

Methods Description
-------------------

.. _api_NavMeshSurface_ae40351f:

**NavMeshSurface::NavMeshSurface** ()

Constructs a navigation surface with automatic building disabled.

----

.. _api_NavMeshSurface_c62a5e9f:

**NavMeshSurface::~NavMeshSurface** ()

Destroys the navigation surface and releases its navigation mesh resource.

----

.. _api_NavMeshSurface_fc351a02:

 void **NavMeshSurface::addBoxColliderGeometry** (:ref:`BoxCollider<api_BoxCollider>` * *collider*, Vector3Vector & *outVertices*, :ref:`std::vector<int><api_std_vector<int>>` & *outIndices*)

Appends box *collider* geometry to the build buffers.

The *collider* geometry is converted into vertices appended to *outVertices* and triangle indices appended to outIndices.

----

.. _api_NavMeshSurface_0ba56cf4:

 void **NavMeshSurface::addCapsuleColliderGeometry** (:ref:`CapsuleCollider<api_CapsuleCollider>` * *collider*, Vector3Vector & *outVertices*, :ref:`std::vector<int><api_std_vector<int>>` & *outIndices*)

Appends capsule *collider* geometry to the build buffers.

The *collider* geometry would be appended to *outVertices* and outIndices.


**Note:** Capsule geometry is not implemented yet.


----

.. _api_NavMeshSurface_bfa175d2:

 void **NavMeshSurface::addMeshColliderGeometry** (:ref:`MeshCollider<api_MeshCollider>` * *collider*, Vector3Vector & *outVertices*, :ref:`std::vector<int><api_std_vector<int>>` & *outIndices*)

Appends mesh *collider* geometry to the build buffers.

The *collider* geometry is converted into vertices appended to *outVertices* and triangle indices appended to outIndices.

----

.. _api_NavMeshSurface_eb4f56a9:

 void **NavMeshSurface::addSphereColliderGeometry** (:ref:`SphereCollider<api_SphereCollider>` * *collider*, Vector3Vector & *outVertices*, :ref:`std::vector<int><api_std_vector<int>>` & *outIndices*)

Appends sphere *collider* geometry to the build buffers.

The *collider* geometry would be appended to *outVertices* and outIndices.


**Note:** Sphere geometry is not implemented yet.


----

.. _api_NavMeshSurface_376fc42d:

 int **NavMeshSurface::agentType** () const

Returns the navigation mesh agent type used to build the surface.

**See also** setAgentType().

----

.. _api_NavMeshSurface_60f31cda:

 bool **NavMeshSurface::autoBuild** () const

Returns whether the surface rebuilds its navigation mesh automatically after a build-related setting changes.

**See also** setAutoBuild().

----

.. _api_NavMeshSurface_8cb65d3e:

 bool **NavMeshSurface::build** ()

Builds the navigation mesh from the configured collider geometry.

Returns true when the resulting navigation mesh is ready; otherwise returns false.

**See also** buildAsync() and clear().

----

.. _api_NavMeshSurface_54e03872:

 :ref:`std::future<bool><api_std::future<bool>>`  **NavMeshSurface::buildAsync** ()

Starts building the navigation mesh on an asynchronous task.

Returns a future that contains the same success state as build().

**See also** build().

----

.. _api_NavMeshSurface_37df8409:

 bool **NavMeshSurface::buildNavMeshData** (Vector3Vector & *vertices*, :ref:`std::vector<int><api_std_vector<int>>` & *indices*)

Converts collected geometry and off-mesh links into navigation mesh data.

The *vertices* buffer contains world-space positions, and *indices* contains triangle *indices* referring to those positions.

Returns true when the navigation mesh data is generated successfully.

----

.. _api_NavMeshSurface_3475cafd:

 void **NavMeshSurface::clear** ()

Unregisters and releases the navigation mesh generated by the surface.

----

.. _api_NavMeshSurface_8d6a124c:

 bool **NavMeshSurface::collectGeometry** (Vector3Vector & *outVertices*, :ref:`std::vector<int><api_std_vector<int>>` & *outIndices*)

Collects collider geometry according to geometrySource().

Collected vertex positions are appended to outVertices, while *outIndices* receives triangle indices referring to those vertices.

Returns true when at least one vertex and one triangle index are collected.

----

.. _api_NavMeshSurface_93d82be7:

 void **NavMeshSurface::drawGizmosSelected** ()

Reimplements: Component::drawGizmosSelected().

Draws the generated navigation mesh when the surface is selected.

----

.. _api_NavMeshSurface_aed8206b:

 int **NavMeshSurface::geometrySource** () const

Returns the source used to collect collider geometry.

**See also** setGeometrySource().

----

.. _api_NavMeshSurface_be4f7ca8:

 void **NavMeshSurface::loadUserData** (VariantMap & *data*)

Reimplements: Object::loadUserData(const VariantMap &data).

Loads the navigation mesh resource reference stored in user data.

----

.. _api_NavMeshSurface_82cbde16:

 :ref:`NavMesh<api_NavMesh>` * **NavMeshSurface::navMesh** () const

Returns the navigation mesh resource generated by this surface.

**See also** setNavMesh().

----

.. _api_NavMeshSurface_1f35bd7c:

 void **NavMeshSurface::onNavMeshChanged** ()

Registers the current navigation mesh in NavigationSystem when it is ready.

----

.. _api_NavMeshSurface_b61583a7:

 VariantMap **NavMeshSurface::saveUserData** () const

Reimplements: Object::saveUserData() const.

Saves the navigation mesh resource reference to user data.

----

.. _api_NavMeshSurface_4259d1c7:

 void **NavMeshSurface::setAgentType** (int  *type*)

Sets the navigation mesh agent *type* used to build the surface.

The *type* value selects the agent configuration to use. When automatic building is enabled, a changed value starts a new build.

**See also** agentType().

----

.. _api_NavMeshSurface_cf8d52e4:

 void **NavMeshSurface::setAutoBuild** (bool  *autoBuild*)

Enables or disables automatic rebuilding of the navigation mesh.

Setting *autoBuild* to true immediately starts a synchronous build.

**See also** autoBuild().

----

.. _api_NavMeshSurface_2a0d7c1e:

 void **NavMeshSurface::setGeometrySource** (int  *source*)

Sets the *source* used to collect collider geometry.

The *source* value selects the collider scope. When automatic building is enabled, a changed value starts a new build.

**See also** geometrySource().

----

.. _api_NavMeshSurface_7e5ba329:

 void **NavMeshSurface::setNavMesh** (:ref:`NavMesh<api_NavMesh>` * *navMesh*)

Assigns the navigation mesh resource owned by the surface.

The *navMesh* value is the resource to assign, or nullptr to clear the current resource.

**See also** navMesh().

----

.. _api_NavMeshSurface_baf38e6d:

 void **NavMeshSurface::setTileSize** (int  *tileSize*)

Sets the tile size used when building the navigation mesh.

The *tileSize* value is the number of cells along one navigation mesh tile edge. Non-positive values are ignored, and a valid changed value starts a new build when automatic building is enabled.

**See also** tileSize().

----

.. _api_NavMeshSurface_f381ad05:

 int **NavMeshSurface::tileSize** () const

Returns the tile size used when building the navigation mesh.

**See also** setTileSize().


