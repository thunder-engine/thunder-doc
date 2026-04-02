.. _api_MeshGroup:

MeshGroup
=========

Inherited: None

.. _api_MeshGroup_description:

Description
-----------



.. _api_MeshGroup_public:

Public Methods
--------------

+--------------------------+---------------------------------------------------------------+
|                      int | :ref:`addLod<api_MeshGroup_097f3aec>` (Mesh * lod)            |
+--------------------------+---------------------------------------------------------------+
|  :ref:`Mesh<api_Mesh>` * | :ref:`lod<api_MeshGroup_709c8ed6>` (int  lod)                 |
+--------------------------+---------------------------------------------------------------+
|                      int | :ref:`lodsCount<api_MeshGroup_97a3c1d0>` () const             |
+--------------------------+---------------------------------------------------------------+
|                     void | :ref:`setLod<api_MeshGroup_cabfe257>` (int  lod, Mesh * data) |
+--------------------------+---------------------------------------------------------------+



.. _api_MeshGroup_static:

Static Methods
--------------

None

.. _api_MeshGroup_methods:

Methods Description
-------------------

.. _api_MeshGroup_097f3aec:

 int **MeshGroup::addLod** (:ref:`Mesh<api_Mesh>` * *lod*)

Adds the new *lod* data for the MeshGroup. Retuns index of new lod.

----

.. _api_MeshGroup_709c8ed6:

 :ref:`Mesh<api_Mesh>` * **MeshGroup::lod** (int  *lod*)

Returns Mesh for the *lod* index if exists; othewise returns nullptr.

**See also** setLod().

----

.. _api_MeshGroup_97a3c1d0:

 int **MeshGroup::lodsCount** () const

Returns the number of Levels Of Details

----

.. _api_MeshGroup_cabfe257:

 void **MeshGroup::setLod** (int  *lod*, :ref:`Mesh<api_Mesh>` * *data*)

Sets the new *data* for the particular lod. This method can replace the existing data.

**See also** lod().


