.. _api_ObjectSystem:

ObjectSystem Class
==================

Inherited: :doc:`Object<api_Object>`

.. _api_ObjectSystem_description:

Description
-----------

ObjectSystem helps to developers create new instances and serialize/deserialize them on disc or in memory.



.. _api_ObjectSystem_public:

Public Methods
--------------

+----------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                                    | :ref:`ObjectSystem<api_ObjectSystem_ObjectSystem>` ()                                                                             |
+----------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                                    | :ref:`~ObjectSystem<api_ObjectSystem_~ObjectSystem>` ()                                                                           |
+----------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                               bool | :ref:`compareTreads<api_ObjectSystem_compareTreads>` (ObjectSystem * system) const                                                |
+----------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                         template <typename T> void | :ref:`factoryAdd<api_ObjectSystem_factoryAdd>` (const std::string & group, const MetaObject * meta)                               |
+----------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                         template <typename T> void | :ref:`factoryRemove<api_ObjectSystem_factoryRemove>` (const std::string & group)                                                  |
+----------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`Object::ObjectList<api_Object::ObjectList>` | :ref:`getAllObjectsByType<api_ObjectSystem_getAllObjectsByType>` (const std::string & type) const                                 |
+----------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                        :ref:`Object<api_Object>` * | :ref:`instantiateObject<api_ObjectSystem_instantiateObject>` (const MetaObject * meta, const std::string & name, Object * parent) |
+----------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+
|                                               void | :ref:`processEvents<api_ObjectSystem_processEvents>` ()                                                                           |
+----------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+

.. _api_ObjectSystem_enums:

Public Enums
------------

.. _api_ObjectSystem_FactoryMap:

**enum ObjectSystem::FactoryMap**

This container holds all registered Objects which can be easily created through objectCreate().

See also objectCreate().

.. _api_ObjectSystem_GroupMap:

**enum ObjectSystem::GroupMap**

This container holds links between objects and groups. Groups helps to manage objects and not used directly.

See also objectCreate().



.. _api_ObjectSystem_static:

Static Methods
--------------

+--------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------+
|          :ref:`ObjectSystem::GroupMap<api_ObjectSystem::GroupMap>` | :ref:`factories<api_ObjectSystem_factories>` ()                                                                                         |
+--------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------+
|                                        :ref:`Object<api_Object>` * | :ref:`findObject<api_ObjectSystem_findObject>` (int  uuid, Object * root)                                                               |
+--------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------+
|                                        :ref:`Object<api_Object>` * | :ref:`findRoot<api_ObjectSystem_findRoot>` (Object * object)                                                                            |
+--------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------+
|                                                                int | :ref:`generateUUID<api_ObjectSystem_generateUUID>` ()                                                                                   |
+--------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`ObjectSystem::FactoryPair<api_ObjectSystem::FactoryPair>` * | :ref:`metaFactory<api_ObjectSystem_metaFactory>` (const std::string & uri)                                                              |
+--------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------+
|                                            template <typename T> T | :ref:`objectCreate<api_ObjectSystem_objectCreate>` (const std::string & name = ..., Object * parent = 0)                                |
+--------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------+
|                                        :ref:`Object<api_Object>` * | :ref:`objectCreate<api_ObjectSystem_objectCreate>` (const std::string & uri, const std::string & name = ..., Object * parent = nullptr) |
+--------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------+
|                                                               void | :ref:`replaceUUID<api_ObjectSystem_replaceUUID>` (Object * object, int  uuid)                                                           |
+--------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------+
|                                        :ref:`Object<api_Object>` * | :ref:`toObject<api_ObjectSystem_toObject>` (const Variant & variant, Object * parent = nullptr, const std::string & name = ...)         |
+--------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------+
|                                        :ref:`Variant<api_Variant>` | :ref:`toVariant<api_ObjectSystem_toVariant>` (const Object * object, bool  force = false)                                               |
+--------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------+

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

.. _api_ObjectSystem_compareTreads:

 bool **ObjectSystem::compareTreads** (:ref:`ObjectSystem<api_ObjectSystem>` * *system*) const

Returns true in case of other *system* execues in the same thread with current *system*; otherwise returns false.

----

.. _api_ObjectSystem_factories:

 :ref:`ObjectSystem::GroupMap<api_ObjectSystem::GroupMap>` **ObjectSystem::factories** ()

Returns all registered classes.

----

.. _api_ObjectSystem_factoryAdd:

template <typename T> void **ObjectSystem::factoryAdd** (std::string & *group*, :ref:`MetaObject<api_MetaObject>` * *meta*)

Registers class with T type, *meta* object and *group* to object instantiation mechanism.

**Note:** New classes inherited from base Object class can be automaticaly registered using T::registerClassFactory(). This is preferable way to use this functionality.

----

.. _api_ObjectSystem_factoryRemove:

template <typename T> void **ObjectSystem::factoryRemove** (std::string & *group*)

Unregisters class with type T and *group* from object instantiation mechanism.

**Note:** The preferable way to use this function is T::unregisterClassFactory() invocation.

----

.. _api_ObjectSystem_findObject:

 :ref:`Object<api_Object>`* **ObjectSystem::findObject** (int  *uuid*, :ref:`Object<api_Object>` * *root*)

Returns object with *uuid* or which was clonned from this. This algorithm recursively going down from the *root* object If the object doesn't exist in the hierarchy this method returns nullptr.

----

.. _api_ObjectSystem_findRoot:

 :ref:`Object<api_Object>`* **ObjectSystem::findRoot** (:ref:`Object<api_Object>` * *object*)

Returns root *object* in the hierarchy.

----

.. _api_ObjectSystem_generateUUID:

 int **ObjectSystem::generateUUID** ()

Returns the new unique ID based on random number generator.

----

.. _api_ObjectSystem_getAllObjectsByType:

 :ref:`Object::ObjectList<api_Object::ObjectList>` **ObjectSystem::getAllObjectsByType** (std::string & *type*) const

Returns a list of objects with specified *type*.

Warning: This is very small function!

----

.. _api_ObjectSystem_instantiateObject:

 :ref:`Object<api_Object>`* **ObjectSystem::instantiateObject** (:ref:`MetaObject<api_MetaObject>` * *meta*, std::string & *name*, :ref:`Object<api_Object>` * *parent*)

The basic method to spawn a new object based on the provided *meta* object, *name* of object and *parent* object. Returns a pointer to spawned object.

----

.. _api_ObjectSystem_metaFactory:

 :ref:`ObjectSystem::FactoryPair<api_ObjectSystem::FactoryPair>`* **ObjectSystem::metaFactory** (std::string & *uri*)

Returns MetaObject for registered factory by provided *uri*.

----

.. _api_ObjectSystem_objectCreate:

template <typename T> T **ObjectSystem::objectCreate** (std::string & *name* = ..., :ref:`Object<api_Object>` * *parent* = 0)

Returns new instance of type T and *name* as child of *parent* object.

**Note:** Class T should be registered first via factoryAdd()

**See also** factoryAdd() and factoryRemove().

----

.. _api_ObjectSystem_objectCreate:

 :ref:`Object<api_Object>`* **ObjectSystem::objectCreate** (std::string & *uri*, std::string & *name* = ..., :ref:`Object<api_Object>` * *parent* = nullptr)

Returns new instance of type represented in *uri* and *name* as child of *parent* object.

**Note:** Class represented as *uri* should be registered first via factoryAdd()

**See also** factoryAdd() and factoryRemove().

----

.. _api_ObjectSystem_processEvents:

 void **ObjectSystem::processEvents** ()

Updates all related objects.

----

.. _api_ObjectSystem_replaceUUID:

 void **ObjectSystem::replaceUUID** (:ref:`Object<api_Object>` * *object*, int  *uuid*)

Replaces current *uuid* of the *object* with the new one.

----

.. _api_ObjectSystem_toObject:

 :ref:`Object<api_Object>`* **ObjectSystem::toObject** (:ref:`Variant<api_Variant>` & *variant*, :ref:`Object<api_Object>` * *parent* = nullptr, std::string & *name* = ...)

Returns object deserialized from *variant* based representation. The Variant representation can be loaded from BSON or JSON formats or retrieved from memory. Deserialization will try to restore objects hierarchy with *parent*, its properties and connections. The root object will be created with a *name* in case of this parameter provided.

----

.. _api_ObjectSystem_toVariant:

 :ref:`Variant<api_Variant>` **ObjectSystem::toVariant** (:ref:`Object<api_Object>` * *object*, bool  *force* = false)

Returns serialized to Variant version of *object* inherited from Object class. This method saves all *object* property values, active connections and necessary parameters.

**Note:** All childs of *object* will be also serialized.

**Note:** Function will ignore Object::isSerializable in case of *force* flag provided.

The returned value can be saved on disk in BSON or JSON form or keep it in memory. Developers is able to save own data using Object::saveUserData() mechanism.


