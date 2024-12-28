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

+----------------------------------+----------------------------------------------------------------------------------------------------+
|        :ref:`AABBox<api_AABBox>` | :ref:`bound<api_Renderable_bound>` () const                                                        |
+----------------------------------+----------------------------------------------------------------------------------------------------+
|  :ref:`Material<api_Material>` * | :ref:`material<api_Renderable_material>` () const                                                  |
+----------------------------------+----------------------------------------------------------------------------------------------------+
|          :ref:`Mesh<api_Mesh>` * | :ref:`meshToDraw<api_Renderable_meshToDraw>` () const                                              |
+----------------------------------+----------------------------------------------------------------------------------------------------+
|                              int | :ref:`priority<api_Renderable_priority>` () const                                                  |
+----------------------------------+----------------------------------------------------------------------------------------------------+
|                             void | :ref:`setMaterial<api_Renderable_setMaterial>` (Material * material)                               |
+----------------------------------+----------------------------------------------------------------------------------------------------+
|                             void | :ref:`setMaterialsList<api_Renderable_setMaterialsList>` (const std::list<Material *> & materials) |
+----------------------------------+----------------------------------------------------------------------------------------------------+



.. _api_Renderable_static:

Static Methods
--------------

None

.. _api_Renderable_methods:

Methods Description
-------------------

.. _api_Renderable_bound:

 :ref:`AABBox<api_AABBox>`  **Renderable::bound** () const

Returns a bound box of the renderable object.

----

.. _api_Renderable_material:

 :ref:`Material<api_Material>` * **Renderable::material** () const

Returns a first instantiated Material assigned to this Renderable.

**See also** setMaterial().

----

.. _api_Renderable_meshToDraw:

 :ref:`Mesh<api_Mesh>` * **Renderable::meshToDraw** () const

Returns a mesh wich will be drawn.

----

.. _api_Renderable_priority:

 int **Renderable::priority** () const

Returns the prority value used to sort renadarble components before drawing. Lower values are rendered first and higher are rendered last.

----

.. _api_Renderable_setMaterial:

 void **Renderable::setMaterial** (:ref:`Material<api_Material>` * *material*)

Creates a new instance of *material* and assigns it.

**See also** *material*().

----

.. _api_Renderable_setMaterialsList:

 void **Renderable::setMaterialsList** (:ref:`*><api_*>>` & *materials*)

Creates a new instances for the list *materials* and assigns it.


