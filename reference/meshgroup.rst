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
|                      int | :ref:`addLod<api_MeshGroup_290e74fb>` (Mesh * lod)            |
+--------------------------+---------------------------------------------------------------+
|  :ref:`Mesh<api_Mesh>` * | :ref:`lod<api_MeshGroup_4fde7a29>` (int  lod)                 |
+--------------------------+---------------------------------------------------------------+
|                      int | :ref:`lodsCount<api_MeshGroup_dbf073ce>` () const             |
+--------------------------+---------------------------------------------------------------+
|                     void | :ref:`setLod<api_MeshGroup_bec7638d>` (int  lod, Mesh * data) |
+--------------------------+---------------------------------------------------------------+



.. _api_MeshGroup_static:

Static Methods
--------------

None

.. _api_MeshGroup_methods:

Methods Description
-------------------

.. _api_MeshGroup_290e74fb:

 int **MeshGroup::addLod** (:ref:`Mesh<api_Mesh>` * *lod*)

Adds the new *lod* data for the MeshGroup. Retuns index of new *lod*.

----

.. _api_MeshGroup_4fde7a29:

 :ref:`Mesh<api_Mesh>` * **MeshGroup::lod** (int  *lod*)

Returns Mesh for the *lod* index if exists; othewise returns nullptr.

**See also** setLod().

----

.. _api_MeshGroup_dbf073ce:

 int **MeshGroup::lodsCount** () const

Returns the number of Levels Of Details

----

.. _api_MeshGroup_bec7638d:

 void **MeshGroup::setLod** (int  *lod*, :ref:`Mesh<api_Mesh>` * *data*)

Sets the new *data* for the particular *lod*. This method can replace the existing *data*.

**See also** *lod*().


