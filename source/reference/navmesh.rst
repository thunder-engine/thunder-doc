.. _api_NavMesh:

NavMesh
=======

Inherited: :ref:`Resource<api_Resource>`

.. _api_NavMesh_description:

Description
-----------

A navigation mesh resource owns the Detour mesh and its query object. It can load and save serialized tile data and provides access to the mesh, query object, and tile reference used by the navigation system.



.. _api_NavMesh_public:

Public Methods
--------------

+----------------------------------------------+---------------------------------------------------------------------+
|                                              | :ref:`NavMesh<api_NavMesh_7dfb15a8>` ()                             |
+----------------------------------------------+---------------------------------------------------------------------+
|                                              | :ref:`~NavMesh<api_NavMesh_3b1625a0>` ()                            |
+----------------------------------------------+---------------------------------------------------------------------+
|                                         void | :ref:`cleanup<api_NavMesh_385a24cd>` ()                             |
+----------------------------------------------+---------------------------------------------------------------------+
|                                         void | :ref:`loadUserData<api_NavMesh_7f948e05>` (const VariantMap & data) |
+----------------------------------------------+---------------------------------------------------------------------+
|            :ref:`dtNavMesh<api_dtNavMesh>` * | :ref:`navMesh<api_NavMesh_e5bc10f6>` () const                       |
+----------------------------------------------+---------------------------------------------------------------------+
|  :ref:`dtNavMeshQuery<api_dtNavMeshQuery>` * | :ref:`query<api_NavMesh_507e69d2>` () const                         |
+----------------------------------------------+---------------------------------------------------------------------+
|                                   VariantMap | :ref:`saveUserData<api_NavMesh_2061d587>` () const                  |
+----------------------------------------------+---------------------------------------------------------------------+
|                                         bool | :ref:`setData<api_NavMesh_08b2c759>` (const ByteArray & data)       |
+----------------------------------------------+---------------------------------------------------------------------+
|              :ref:`dtTileRef<api_dtTileRef>` | :ref:`tileRef<api_NavMesh_fea05247>` (int  tileX, int  tileY) const |
+----------------------------------------------+---------------------------------------------------------------------+



.. _api_NavMesh_static:

Static Methods
--------------

None

.. _api_NavMesh_methods:

Methods Description
-------------------

.. _api_NavMesh_7dfb15a8:

**NavMesh::NavMesh** ()

Constructs an empty navigation mesh resource.

----

.. _api_NavMesh_3b1625a0:

**NavMesh::~NavMesh** ()

Destroys the navigation mesh resource and releases its Detour objects.

----

.. _api_NavMesh_385a24cd:

 void **NavMesh::cleanup** ()

Releases the Detour navigation mesh and query objects owned by the resource.

----

.. _api_NavMesh_7f948e05:

 void **NavMesh::loadUserData** (VariantMap & *data*)

Reimplements: Object::loadUserData(const VariantMap &data).

Loads serialized navigation mesh tile *data* from resource user data.

The *data* map contains the serialized resource user *data* and its tile data.

----

.. _api_NavMesh_e5bc10f6:

 :ref:`dtNavMesh<api_dtNavMesh>` * **NavMesh::navMesh** () const

Returns the underlying Detour navigation mesh, or nullptr when it is not loaded.

----

.. _api_NavMesh_507e69d2:

 :ref:`dtNavMeshQuery<api_dtNavMeshQuery>` * **NavMesh::query** () const

Returns the Detour navigation query object, or nullptr when it is not initialized.

----

.. _api_NavMesh_2061d587:

 VariantMap **NavMesh::saveUserData** () const

Reimplements: Object::saveUserData() const.

Saves the first available navigation mesh tile as resource user data.

----

.. _api_NavMesh_08b2c759:

 bool **NavMesh::setData** (ByteArray & *data*)

Loads serialized Detour tile *data* into the navigation mesh.

The *data* replaces the currently loaded tile. The method returns true when it is added successfully, or false when the *data* is invalid or Detour rejects the tile.

----

.. _api_NavMesh_fea05247:

 :ref:`dtTileRef<api_dtTileRef>`  **NavMesh::tileRef** (int  *tileX*, int  *tileY*) const

Returns the Detour reference for the tile at coordinates *tileX* and tileY.

Returns zero when the navigation mesh is not loaded or no tile exists at the requested coordinates.


