.. _api_Renderable:
Renderable Class
================

Inherited: :ref:`NativeBehaviour<api_NativeBehaviour>`

.. _api_Renderable_description:
Description
-----------

Base class for every object which can be drawn on the screen.

Note: This class must be a superclass only and shouldn't be created manually.



.. _api_Renderable_public:
Public Methods
--------------

+---------------------------+-------------------------------------------------+
|                           | :ref:`Renderable<api_Renderable_Renderable>` () |
+---------------------------+-------------------------------------------------+
| :ref:`AABBox<api_AABBox>` | :ref:`bound<api_Renderable_bound>` () const     |
+---------------------------+-------------------------------------------------+

.. _api_Renderable_static:
Static Methods
--------------

+-------------------------------------------------------------------+-------------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_Renderable_methods>` ()       |
+-------------------------------------------------------------------+-------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_Renderable_properties>` () |
+-------------------------------------------------------------------+-------------------------------------------------+

.. _api_Renderable_methods:
Methods Description
-------------------

.. _api_Renderable_Renderable:

**Renderable::Renderable** ()

Default constructs an instance of Renderable.

----

.. _api_Renderable_bound:

:ref:`AABBox<api_AABBox>`  **Renderable::bound** () const

Returns a bound box of the renderable object.

----

.. _api_Renderable_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **Renderable::methods** ()

----

.. _api_Renderable_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **Renderable::properties** ()

----


