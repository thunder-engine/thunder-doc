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

+----------------------------------------------------+-------------------------------------------------------------------------------------------+
|  :ref:`Object::ObjectList<api_Object::ObjectList>` | :ref:`absentInCloned<api_Prefab_absentInCloned>` (const Prefab::ConstObjectList & cloned) |
+----------------------------------------------------+-------------------------------------------------------------------------------------------+
|                          :ref:`Actor<api_Actor>` * | :ref:`actor<api_Prefab_actor>` () const                                                   |
+----------------------------------------------------+-------------------------------------------------------------------------------------------+
|                                               bool | :ref:`contains<api_Prefab_contains>` (uint32_t  uuid)                                     |
+----------------------------------------------------+-------------------------------------------------------------------------------------------+
|                        :ref:`Object<api_Object>` * | :ref:`protoObject<api_Prefab_protoObject>` (uint32_t  uuid)                               |
+----------------------------------------------------+-------------------------------------------------------------------------------------------+



.. _api_Prefab_static:

Static Methods
--------------

None

.. _api_Prefab_methods:

Methods Description
-------------------

.. _api_Prefab_absentInCloned:

 :ref:`Object::ObjectList<api_Object::ObjectList>`  **Prefab::absentInCloned** (:ref:`Prefab::ConstObjectList<api_Prefab::ConstObjectList>` & *cloned*)

Compares with prefab and returns a list of abset objects in *cloned* list

----

.. _api_Prefab_actor:

 :ref:`Actor<api_Actor>` * **Prefab::actor** () const

Returns prototype Actor which will should be instanced

----

.. _api_Prefab_contains:

 bool **Prefab::contains** (:ref:`uint32_t<api_uint32_t>`  *uuid*)

Returns true if prefab contains an object with provided *uuid*

----

.. _api_Prefab_protoObject:

 :ref:`Object<api_Object>` * **Prefab::protoObject** (:ref:`uint32_t<api_uint32_t>`  *uuid*)

Returns a prototype of object with provided *uuid*


