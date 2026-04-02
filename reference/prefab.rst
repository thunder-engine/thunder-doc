.. _api_Prefab:

Prefab
======

Inherited: None

.. _api_Prefab_description:

Description
-----------



.. _api_Prefab_public:

Public Methods
--------------

+---------------------------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`Object::ObjectList<api_Object_ObjectList>` | :ref:`absentInCloned<api_Prefab_62a4ec93>` (const Prefab::ConstObjectList & cloned) |
+---------------------------------------------------+-------------------------------------------------------------------------------------+
|                         :ref:`Actor<api_Actor>` * | :ref:`actor<api_Prefab_ad08e56c>` () const                                          |
+---------------------------------------------------+-------------------------------------------------------------------------------------+
|                                              bool | :ref:`contains<api_Prefab_d963bc14>` (uint32_t  uuid)                               |
+---------------------------------------------------+-------------------------------------------------------------------------------------+
|                       :ref:`Object<api_Object>` * | :ref:`protoObject<api_Prefab_b0546ce7>` (uint32_t  uuid)                            |
+---------------------------------------------------+-------------------------------------------------------------------------------------+



.. _api_Prefab_static:

Static Methods
--------------

None

.. _api_Prefab_methods:

Methods Description
-------------------

.. _api_Prefab_62a4ec93:

 :ref:`Object::ObjectList<api_Object::ObjectList>`  **Prefab::absentInCloned** (:ref:`Prefab::ConstObjectList<api_Prefab::ConstObjectList>` & *cloned*)

Compares with prefab and returns a list of abset objects in *cloned* list

----

.. _api_Prefab_ad08e56c:

 :ref:`Actor<api_Actor>` * **Prefab::actor** () const

Returns prototype Actor which will should be instanced

----

.. _api_Prefab_d963bc14:

 bool **Prefab::contains** (uint32_t  *uuid*)

Returns true if prefab contains an object with provided *uuid*

----

.. _api_Prefab_b0546ce7:

 :ref:`Object<api_Object>` * **Prefab::protoObject** (uint32_t  *uuid*)

Returns a prototype of object with provided *uuid*


