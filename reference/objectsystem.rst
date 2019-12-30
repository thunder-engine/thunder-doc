.. _api_ObjectSystem:
ObjectSystem Class
================

Inherited: :ref:`Object<api_Object>`

.. _api_ObjectSystem_description:
Description
-----------

ObjectSystem helps to developers create new instances and serialize/deserialize them on disc or in memory.



.. _api_ObjectSystem_public:
Public Methods
--------------

+-----------------------------------------------------------+---------------------------------------------------------+
|                                                           | :ref:`ObjectSystem<api_ObjectSystem_ObjectSystem>` ()   |
+-----------------------------------------------------------+---------------------------------------------------------+
|                                                           | :ref:`~ObjectSystem<api_ObjectSystem_~ObjectSystem>` () |
+-----------------------------------------------------------+---------------------------------------------------------+
| :ref:`ObjectSystem::GroupMap<api_ObjectSystem::GroupMap>` | :ref:`factories<api_ObjectSystem_factories>` () const   |
+-----------------------------------------------------------+---------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`processEvents<api_ObjectSystem_processEvents>` () |
+-----------------------------------------------------------+---------------------------------------------------------+

.. _api_ObjectSystem_static:
Static Methods
--------------

+-------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------+
|                                     :ref:`uint32_t<api_uint32_t>` | :ref:`generateUUID<api_ObjectSystem_generateUUID>` ()                                                                                        |
+-------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------+
| :ref:`ObjectSystem::FactoryPair<api_ObjectSystem::FactoryPair>` * | :ref:`metaFactory<api_ObjectSystem_metaFactory>` (const std::string & uri)                                                                   |
+-------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------+
|                                       :ref:`Object<api_Object>` * | :ref:`objectCreate<api_ObjectSystem_objectCreate>` (const std::string & uri, const std::string & name = string(), Object * parent = nullptr) |
+-------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------+
|                                             :ref:`void<api_void>` | :ref:`replaceUUID<api_ObjectSystem_replaceUUID>` (Object * object, uint32_t  uuid)                                                           |
+-------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------+
|                                       :ref:`Object<api_Object>` * | :ref:`toObject<api_ObjectSystem_toObject>` (const Variant & variant, Object * root = nullptr)                                                |
+-------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------+
|                                       :ref:`Variant<api_Variant>` | :ref:`toVariant<api_ObjectSystem_toVariant>` (const Object * object)                                                                         |
+-------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------+

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

.. _api_ObjectSystem_generateUUID:

:ref:`uint32_t<api_uint32_t>`  **ObjectSystem::generateUUID** ()

Returns the new unique ID based on random number generator.

----

.. _api_ObjectSystem_metaFactory:

:ref:`ObjectSystem::FactoryPair<api_ObjectSystem::FactoryPair>` * **ObjectSystem::metaFactory** (:ref:`std::string<api_std::string>` & *uri*)

Returns MetaObject for registered factory by provided *uri*.

----

.. _api_ObjectSystem_objectCreate:

:ref:`Object<api_Object>` * **ObjectSystem::objectCreate** (:ref:`std::string<api_std::string>` & *uri*, :ref:`std::string<api_std::string>` & *name* = string(), :ref:`Object<api_Object>` * *parent* = nullptr)

Returns new instance of type represented in *uri* and *name* as child of *parent* object.

**Note:** Class represented as *uri* should be registered first via factoryAdd()

**See also** factoryAdd() and factoryRemove().

----

.. _api_ObjectSystem_processEvents:

:ref:`void<api_void>`  **ObjectSystem::processEvents** ()

Updates all related objects.

----

.. _api_ObjectSystem_replaceUUID:

:ref:`void<api_void>`  **ObjectSystem::replaceUUID** (:ref:`Object<api_Object>` * *object*, :ref:`uint32_t<api_uint32_t>`  *uuid*)

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


