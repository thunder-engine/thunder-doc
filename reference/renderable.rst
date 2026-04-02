.. _api_Renderable:

Renderable
==========

Inherited: None

.. _api_Renderable_description:

Description
-----------


Note: This class must be a superclass only and shouldn't be created manually.




.. _api_Renderable_public:

Public Methods
--------------

+--------------------------------------------------+--------------------------------------------------------------------------------------------+
|                        :ref:`AABBox<api_AABBox>` | :ref:`bound<api_Renderable_5f8407e1>` ()                                                   |
+--------------------------------------------------+--------------------------------------------------------------------------------------------+
|                  :ref:`Material<api_Material>` * | :ref:`material<api_Renderable_8350d79a>` () const                                          |
+--------------------------------------------------+--------------------------------------------------------------------------------------------+
|  :ref:`MaterialInstance<api_MaterialInstance>` * | :ref:`materialInstance<api_Renderable_0cdf91b5>` (int  index)                              |
+--------------------------------------------------+--------------------------------------------------------------------------------------------+
|                          :ref:`Mesh<api_Mesh>` * | :ref:`meshToDraw<api_Renderable_5f3cea42>` (int  instance)                                 |
+--------------------------------------------------+--------------------------------------------------------------------------------------------+
|                                             void | :ref:`setMaterial<api_Renderable_d04e7685>` (Material * material)                          |
+--------------------------------------------------+--------------------------------------------------------------------------------------------+
|                                             void | :ref:`setMaterialsList<api_Renderable_79a3081d>` (const std::list<Material *> & materials) |
+--------------------------------------------------+--------------------------------------------------------------------------------------------+
|                                         uint32_t | :ref:`subMesh<api_Renderable_d830c5e1>` (int  instance) const                              |
+--------------------------------------------------+--------------------------------------------------------------------------------------------+



.. _api_Renderable_static:

Static Methods
--------------

None

.. _api_Renderable_methods:

Methods Description
-------------------

.. _api_Renderable_5f8407e1:

 :ref:`AABBox<api_AABBox>`  **Renderable::bound** ()

Returns a bound box of the renderable object.

----

.. _api_Renderable_8350d79a:

 :ref:`Material<api_Material>` * **Renderable::material** () const

Returns a first instantiated Material assigned to this Renderable.

**See also** setMaterial().

----

.. _api_Renderable_0cdf91b5:

 :ref:`MaterialInstance<api_MaterialInstance>` * **Renderable::materialInstance** (int  *index*)

Returns a Material instance with *index* assigned to this Renderable.

----

.. _api_Renderable_5f3cea42:

 :ref:`Mesh<api_Mesh>` * **Renderable::meshToDraw** (int  *instance*)

Returns a mesh which will be drawn for the particular material *instance*.

----

.. _api_Renderable_d04e7685:

 void **Renderable::setMaterial** (:ref:`Material<api_Material>` * *material*)

Creates a new instance of *material* and assigns it.

**See also** *material*().

----

.. _api_Renderable_79a3081d:

 void **Renderable::setMaterialsList** (:ref:`*><api_*>>` & *materials*)

Creates a new instances for the list *materials* and assigns it.

----

.. _api_Renderable_d830c5e1:

 uint32_t **Renderable::subMesh** (int  *instance*) const

Returns a sub mesh index which will be drawn for the particular material *instance*.


