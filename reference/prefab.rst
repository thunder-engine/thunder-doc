.. _api_Prefab:
Prefab Class
================

Inherited: :ref:`Resource<api_Resource>`

.. _api_Prefab_description:
Description
-----------

A small piece of objects hierarchy which can be placed on the scene.



.. _api_Prefab_public:
Public Methods
--------------

+---------------------------+-----------------------------------------+
|                           | :ref:`Prefab<api_Prefab_Prefab>` ()     |
+---------------------------+-----------------------------------------+
|                           | :ref:`~Prefab<api_Prefab_~Prefab>` ()   |
+---------------------------+-----------------------------------------+
| :ref:`Actor<api_Actor>` * | :ref:`actor<api_Prefab_actor>` () const |
+---------------------------+-----------------------------------------+



.. _api_Prefab_static:
Static Methods
--------------

+-------------------------------------------------------------------+---------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_Prefab_properties>` () |
+-------------------------------------------------------------------+---------------------------------------------+

.. _api_Prefab_methods:
Methods Description
-------------------

.. _api_Prefab_Prefab:

**Prefab::Prefab** ()

Default constructs an instance of Prefab.

----

.. _api_Prefab_~Prefab:

**Prefab::~Prefab** ()

Destroys the instance of Prefab. The destructor is virtual.

----

.. _api_Prefab_actor:

:ref:`Actor<api_Actor>` * **Prefab::actor** () const

Returns prototype Actor which will should be instanced

----

.. _api_Prefab_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **Prefab::properties** ()

----


