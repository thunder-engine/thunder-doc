.. _api_MeshCollider:

MeshCollider
============

Inherited: :doc:`Collider<api_Collider>`

.. _api_MeshCollider_description:

Description
-----------

The MeshCollider class provides a way to create a collider based on a 3D mesh. The collider can be attached to a physics world, and its properties, such as the mesh, material, and enabled state, can be manipulated dynamically.



.. _api_MeshCollider_public:

Public Methods
--------------

+----------------------------------------------+------------------------------------------------------------------------------+
|  :ref:`PhysicMaterial<api_PhysicMaterial>` * | :ref:`material<api_MeshCollider_material>` () const                          |
+----------------------------------------------+------------------------------------------------------------------------------+
|                      :ref:`Mesh<api_Mesh>` * | :ref:`mesh<api_MeshCollider_mesh>` () const                                  |
+----------------------------------------------+------------------------------------------------------------------------------+
|                                         void | :ref:`setMaterial<api_MeshCollider_setMaterial>` (PhysicMaterial * material) |
+----------------------------------------------+------------------------------------------------------------------------------+
|                                         void | :ref:`setMesh<api_MeshCollider_setMesh>` (Mesh * mesh)                       |
+----------------------------------------------+------------------------------------------------------------------------------+



.. _api_MeshCollider_static:

Static Methods
--------------

None

.. _api_MeshCollider_methods:

Methods Description
-------------------

.. _api_MeshCollider_material:

 :ref:`PhysicMaterial<api_PhysicMaterial>`* **MeshCollider::material** () const

Returns a pointer to the physical material associated with the collider.

**See also** setMaterial().

----

.. _api_MeshCollider_mesh:

 :ref:`Mesh<api_Mesh>`* **MeshCollider::mesh** () const

Returns a pointer to the mesh used by the collider.

**See also** setMesh().

----

.. _api_MeshCollider_setMaterial:

 void **MeshCollider::setMaterial** (:ref:`PhysicMaterial<api_PhysicMaterial>` * *material*)

Sets the physical *material* for the collider. This method updates the friction and restitution properties of the collider.

**See also** *material*().

----

.. _api_MeshCollider_setMesh:

 void **MeshCollider::setMesh** (:ref:`Mesh<api_Mesh>` * *mesh*)

Sets the *mesh* for the collider. This method recreates the collider's shape and updates its properties.

**See also** *mesh*().


