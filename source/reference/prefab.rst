.. _api_Prefab:

Prefab
======

Inherited: :ref:`Resource<api_Resource>`

.. _api_Prefab_description:

Description
-----------



.. _api_Prefab_public:

Public Methods
--------------

+------------------------------+-------------------------------------------------------------------------------------+
|           Object::ObjectList | :ref:`absentInCloned<api_Prefab_b0a3e17f>` (const Prefab::ConstObjectList & cloned) |
+------------------------------+-------------------------------------------------------------------------------------+
|    :ref:`Actor<api_Actor>` * | :ref:`actor<api_Prefab_08d1f432>` () const                                          |
+------------------------------+-------------------------------------------------------------------------------------+
|                         bool | :ref:`contains<api_Prefab_3920cfd5>` (uint32_t  uuid)                               |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`Object<api_Object>` * | :ref:`protoObject<api_Prefab_f952c478>` (uint32_t  uuid)                            |
+------------------------------+-------------------------------------------------------------------------------------+



.. _api_Prefab_static:

Static Methods
--------------

None

.. _api_Prefab_methods:

Methods Description
-------------------

.. _api_Prefab_b0a3e17f:

 Object::ObjectList **Prefab::absentInCloned** (:ref:`Prefab::ConstObjectList<api_Prefab_ConstObjectList>` & *cloned*)

Compares with prefab and returns a list of abset objects in *cloned* list

----

.. _api_Prefab_08d1f432:

 :ref:`Actor<api_Actor>` * **Prefab::actor** () const

Returns prototype Actor which will should be instanced

----

.. _api_Prefab_3920cfd5:

 bool **Prefab::contains** (uint32_t  *uuid*)

Returns true if prefab contains an object with provided uuid

----

.. _api_Prefab_f952c478:

 :ref:`Object<api_Object>` * **Prefab::protoObject** (uint32_t  *uuid*)

Returns a prototype of object with provided uuid


