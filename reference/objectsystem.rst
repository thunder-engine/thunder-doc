.. _api_ObjectSystem:
ObjectSystem Class
================

Inherited: :ref:`Object<api_Object>`

.. _api_ObjectSystem_description:
Description
-----------

The ObjectSystem responds for object management.

ObjectSystem helps to developers create new instances and serialize/deserialize them on disc or in memory.



.. _api_ObjectSystem_public:
Public Methods
--------------

+-----------------------------------------------------------+---------------------------------------------------------------------------------------------+
|                                                           | :ref:`ObjectSystem<api_ObjectSystem_ObjectSystem>` ()                                       |
+-----------------------------------------------------------+---------------------------------------------------------------------------------------------+
|                                                           | :ref:`~ObjectSystem<api_ObjectSystem_~ObjectSystem>` ()                                     |
+-----------------------------------------------------------+---------------------------------------------------------------------------------------------+
| :ref:`ObjectSystem::GroupMap<api_ObjectSystem::GroupMap>` | :ref:`factories<api_ObjectSystem_factories>` () const                                       |
+-----------------------------------------------------------+---------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`factoryAdd<api_ObjectSystem_factoryAdd>` (const int & group, const MetaObject * meta) |
+-----------------------------------------------------------+---------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`factoryRemove<api_ObjectSystem_factoryRemove>` (const int & group)                    |
+-----------------------------------------------------------+---------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`processEvents<api_ObjectSystem_processEvents>` ()                                     |
+-----------------------------------------------------------+---------------------------------------------------------------------------------------------+

.. _api_ObjectSystem_static:
Static Methods
--------------

+-------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------+
|                                               :ref:`int<api_int>` | :ref:`generateUUID<api_ObjectSystem_generateUUID>` ()                                                                   |
+-------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------+
| :ref:`ObjectSystem::FactoryPair<api_ObjectSystem::FactoryPair>` * | :ref:`metaFactory<api_ObjectSystem_metaFactory>` (const int & uri)                                                      |
+-------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------+
|                                                 :ref:`T<api_T>` * | :ref:`objectCreate<api_ObjectSystem_objectCreate>` (const int & name = ..., Object * parent = nullptr)                  |
+-------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------+
|                                       :ref:`Object<api_Object>` * | :ref:`objectCreate<api_ObjectSystem_objectCreate>` (const int & uri, const int & name = ..., Object * parent = nullptr) |
+-------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------+
|                                             :ref:`void<api_void>` | :ref:`replaceUUID<api_ObjectSystem_replaceUUID>` (Object * object, int  uuid)                                           |
+-------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------+
|                                       :ref:`Object<api_Object>` * | :ref:`toObject<api_ObjectSystem_toObject>` (const Variant & variant, Object * root = nullptr)                           |
+-------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------+
|                                       :ref:`Variant<api_Variant>` | :ref:`toVariant<api_ObjectSystem_toVariant>` (const Object * object)                                                    |
+-------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------+

.. _api_ObjectSystem_methods:
Methods Description
-------------------

.. _api_ObjectSystem_ObjectSystem:

**ObjectSystem::ObjectSystem** ()

Constructs ObjectSystem.

----

.. _api_ObjectSystem_~ObjectSystem:

**ObjectSystem::~ObjectSystem** ()

Destructs ObjectSystem, related objects and registered object factories.

----

.. _api_ObjectSystem_factories:

:ref:`ObjectSystem::GroupMap<api_ObjectSystem::GroupMap>`  **ObjectSystem::factories** () const

Returns all registered classes.

----

.. _api_ObjectSystem_factoryAdd:

:ref:`void<api_void>`  **ObjectSystem::factoryAdd** (:ref:`int<api_int>` & *group*, :ref:`MetaObject<api_MetaObject>` * *meta*)

----

.. _api_ObjectSystem_factoryRemove:

:ref:`void<api_void>`  **ObjectSystem::factoryRemove** (:ref:`int<api_int>` & *group*)

----

.. _api_ObjectSystem_generateUUID:

:ref:`int<api_int>`  **ObjectSystem::generateUUID** ()

Returns the new unique ID based on random number generator.

----

.. _api_ObjectSystem_metaFactory:

:ref:`ObjectSystem::FactoryPair<api_ObjectSystem::FactoryPair>` * **ObjectSystem::metaFactory** (:ref:`int<api_int>` & *uri*)

Returns MetaObject for registered factory by provided *uri*.

----

.. _api_ObjectSystem_objectCreate:

:ref:`T<api_T>` * **ObjectSystem::objectCreate** (:ref:`int<api_int>` & *name* = ..., :ref:`Object<api_Object>` * *parent* = nullptr)

----

.. _api_ObjectSystem_objectCreate:

:ref:`Object<api_Object>` * **ObjectSystem::objectCreate** (:ref:`int<api_int>` & *uri*, :ref:`int<api_int>` & *name* = ..., :ref:`Object<api_Object>` * *parent* = nullptr)

Returns new instance of type represented in *uri* and *name* as child of *parent* object.

**Note:** Class represented as *uri* should be registered first via factoryAdd()

**See also** factoryAdd() and factoryRemove().

----

.. _api_ObjectSystem_processEvents:

:ref:`void<api_void>`  **ObjectSystem::processEvents** ()

Updates all related objects.

----

.. _api_ObjectSystem_replaceUUID:

:ref:`void<api_void>`  **ObjectSystem::replaceUUID** (:ref:`Object<api_Object>` * *object*, :ref:`int<api_int>`  *uuid*)

Replaces current *uuid* of the *object* with the new one.

----

.. _api_ObjectSystem_toObject:

:ref:`Object<api_Object>` * **ObjectSystem::toObject** (:ref:`Variant<api_Variant>` & *variant*, :ref:`Object<api_Object>` * *root* = nullptr)

Returns object deserialized from *variant* based representation. The Variant representation can be loaded from BSON or JSON formats or retrieved from memory. Deserialization will try to restore objects hierarchy with *root* as parent, its properties and connections.

----

.. _api_ObjectSystem_toVariant:

:ref:`Variant<api_Variant>`  **ObjectSystem::toVariant** (:ref:`Object<api_Object>` * *object*)

Returns serialized to Variant version of *object* inherited from Object class. This method saves all *object* property values, active connections and necessary parameters.

**Note:** All childs of *object* will be also serialized.

The returned value can be saved on disk in BSON or JSON form or keep it in memory. Developers is able to save own data using Object::saveUserData() mechanism.

----


