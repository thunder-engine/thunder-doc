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

+------------------------------+-------------------------------------------------------------------------------------+
|           Object::ObjectList | :ref:`absentInCloned<api_Prefab_a721db4f>` (const Prefab::ConstObjectList & cloned) |
+------------------------------+-------------------------------------------------------------------------------------+
|    :ref:`Actor<api_Actor>` * | :ref:`actor<api_Prefab_320bcea7>` () const                                          |
+------------------------------+-------------------------------------------------------------------------------------+
|                         bool | :ref:`contains<api_Prefab_9a032e14>` (uint32_t  uuid)                               |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`Object<api_Object>` * | :ref:`protoObject<api_Prefab_e50d849c>` (uint32_t  uuid)                            |
+------------------------------+-------------------------------------------------------------------------------------+



.. _api_Prefab_static:

Static Methods
--------------

None

.. _api_Prefab_methods:

Methods Description
-------------------

.. _api_Prefab_a721db4f:

 Object::ObjectList **Prefab::absentInCloned** (:ref:`Prefab::ConstObjectList<api_Prefab_ConstObjectList>` & *cloned*)

Compares with prefab and returns a list of abset objects in *cloned* list

----

.. _api_Prefab_320bcea7:

 :ref:`Actor<api_Actor>` * **Prefab::actor** () const

Returns prototype Actor which will should be instanced

----

.. _api_Prefab_9a032e14:

 bool **Prefab::contains** (uint32_t  *uuid*)

Returns true if prefab contains an object with provided uuid

----

.. _api_Prefab_e50d849c:

 :ref:`Object<api_Object>` * **Prefab::protoObject** (uint32_t  *uuid*)

Returns a prototype of object with provided uuid


