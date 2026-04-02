.. _api_ObjectSystem:

ObjectSystem
============

Inherited: None

.. _api_ObjectSystem_description:

Description
-----------

ObjectSystem helps to developers create new instances and serialize/deserialize them on disc or in memory.



.. _api_ObjectSystem_public:

Public Methods
--------------

+---------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                                   | :ref:`ObjectSystem<api_ObjectSystem_572a486e>` ()                                                                    |
+---------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                                   | :ref:`~ObjectSystem<api_ObjectSystem_3e40c1f8>` ()                                                                   |
+---------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                              void | :ref:`addObject<api_ObjectSystem_b43167f5>` (Object * object)                                                        |
+---------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                              bool | :ref:`compareTreads<api_ObjectSystem_f7b0d453>` (ObjectSystem * system) const                                        |
+---------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|  :ref:`Object::ObjectList<api_Object_ObjectList>` | :ref:`getAllObjectsByType<api_ObjectSystem_02db854f>` (const TString & type) const                                   |
+---------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                       :ref:`Object<api_Object>` * | :ref:`instantiateObject<api_ObjectSystem_5e106f87>` (const MetaObject * meta, const TString & name, Object * parent) |
+---------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+
|                                              void | :ref:`processEvents<api_ObjectSystem_2fea1c58>` ()                                                                   |
+---------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+



.. _api_ObjectSystem_static:

Static Methods
--------------

+-------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                              void | :ref:`blockObjectCache<api_ObjectSystem_16c475f3>` (bool  flag)                                                                                     |
+-------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|          :ref:`ObjectSystem::GroupMap<api_ObjectSystem_GroupMap>` | :ref:`factories<api_ObjectSystem_c38e50f2>` ()                                                                                                      |
+-------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       :ref:`Object<api_Object>` * | :ref:`findObject<api_ObjectSystem_750f23ca>` (uint32_t  uuid)                                                                                       |
+-------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       :ref:`Object<api_Object>` * | :ref:`findRoot<api_ObjectSystem_be26c950>` (Object * object)                                                                                        |
+-------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                          uint32_t | :ref:`generateUUID<api_ObjectSystem_d2a3e865>` ()                                                                                                   |
+-------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`ObjectSystem::FactoryPair<api_ObjectSystem_FactoryPair>` * | :ref:`metaFactory<api_ObjectSystem_2dc0bf83>` (const TString & url)                                                                                 |
+-------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       :ref:`Object<api_Object>` * | :ref:`objectCreate<api_ObjectSystem_c1de2a34>` (const TString & url, const TString & name = TString(), Object * parent = nullptr, uint32_t  id = 0) |
+-------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                              void | :ref:`replaceClonedUUID<api_ObjectSystem_13064ba5>` (Object * object, uint32_t  uuid)                                                               |
+-------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                              void | :ref:`replaceUUID<api_ObjectSystem_64fc321a>` (Object * object, uint32_t  uuid)                                                                     |
+-------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       :ref:`Object<api_Object>` * | :ref:`toObject<api_ObjectSystem_143e8d26>` (const Variant & variant, Object * parent = nullptr, const TString & name = TString())                   |
+-------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       :ref:`Variant<api_Variant>` | :ref:`toVariant<api_ObjectSystem_d6a9437b>` (const Object * object, bool  force = false)                                                            |
+-------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+

.. _api_ObjectSystem_methods:

Methods Description
-------------------

.. _api_ObjectSystem_572a486e:

**ObjectSystem::ObjectSystem** ()

Constructs ObjectSystem.

----

.. _api_ObjectSystem_3e40c1f8:

**ObjectSystem::~ObjectSystem** ()

Destructs ObjectSystem, related objects and registered object factories.

----

.. _api_ObjectSystem_b43167f5:

 void **ObjectSystem::addObject** (:ref:`Object<api_Object>` * *object*)

Adds an *object* to main pull of *object*s in ObjectSystem

----

.. _api_ObjectSystem_16c475f3:

 void **ObjectSystem::blockObjectCache** (bool  *flag*)

This function sets a *flag* that prevents objects from being cached for fast lookup.

----

.. _api_ObjectSystem_f7b0d453:

 bool **ObjectSystem::compareTreads** (:ref:`ObjectSystem<api_ObjectSystem>` * *system*) const

Returns true in case of other *system* execues in the same thread with current *system*; otherwise returns false.

----

.. _api_ObjectSystem_c38e50f2:

 :ref:`ObjectSystem::GroupMap<api_ObjectSystem::GroupMap>`  **ObjectSystem::factories** ()

Returns all registered classes.

----

.. _api_ObjectSystem_750f23ca:

 :ref:`Object<api_Object>` * **ObjectSystem::findObject** (uint32_t  *uuid*)

Returns object with *uuid*. If the object doesn't exist in the hierarchy this method returns nullptr.

----

.. _api_ObjectSystem_be26c950:

 :ref:`Object<api_Object>` * **ObjectSystem::findRoot** (:ref:`Object<api_Object>` * *object*)

Returns root *object* in the hierarchy.

----

.. _api_ObjectSystem_d2a3e865:

 uint32_t **ObjectSystem::generateUUID** ()

Returns the new unique ID based on random number generator.

----

.. _api_ObjectSystem_02db854f:

 :ref:`Object::ObjectList<api_Object::ObjectList>`  **ObjectSystem::getAllObjectsByType** (:ref:`TString<api_TString>` & *type*) const

Returns a list of objects with specified *type*.


Warning: This is very small function!


----

.. _api_ObjectSystem_5e106f87:

 :ref:`Object<api_Object>` * **ObjectSystem::instantiateObject** (:ref:`MetaObject<api_MetaObject>` * *meta*, :ref:`TString<api_TString>` & *name*, :ref:`Object<api_Object>` * *parent*)

The basic method to spawn a new object based on the provided *meta* object, *name* of object and *parent* object. Returns a pointer to spawned object.

----

.. _api_ObjectSystem_2dc0bf83:

 :ref:`ObjectSystem::FactoryPair<api_ObjectSystem::FactoryPair>` * **ObjectSystem::metaFactory** (:ref:`TString<api_TString>` & *url*)

Returns MetaObject for registered factory by provided *url*.

----

.. _api_ObjectSystem_c1de2a34:

 :ref:`Object<api_Object>` * **ObjectSystem::objectCreate** (:ref:`TString<api_TString>` & *url*, :ref:`TString<api_TString>` & *name* = TString(), :ref:`Object<api_Object>` * *parent* = nullptr, uint32_t  *id* = 0)

Returns new instance of type represented in *url* and *name* as child of *parent* object.


**Note:** Class represented as *url* should be registered first via factoryAdd()



**Note:** Optional *id* parameter can be used to set custom object *id*entifier. If set to 0, a new UUID is automatically generated for the instance.


----

.. _api_ObjectSystem_2fea1c58:

 void **ObjectSystem::processEvents** ()

Updates all related objects.

----

.. _api_ObjectSystem_13064ba5:

 void **ObjectSystem::replaceClonedUUID** (:ref:`Object<api_Object>` * *object*, uint32_t  *uuid*)

Replaces current cloned *uuid* of the *object* with the new one.


**Note:** This is a service function. Developers shouldn't call it manually.


----

.. _api_ObjectSystem_64fc321a:

 void **ObjectSystem::replaceUUID** (:ref:`Object<api_Object>` * *object*, uint32_t  *uuid*)

Replaces current *uuid* of the *object* with the new one.

----

.. _api_ObjectSystem_143e8d26:

 :ref:`Object<api_Object>` * **ObjectSystem::toObject** (:ref:`Variant<api_Variant>` & *variant*, :ref:`Object<api_Object>` * *parent* = nullptr, :ref:`TString<api_TString>` & *name* = TString())

Returns object deserialized from *variant* based representation. The Variant representation can be loaded from BSON or JSON formats or retrieved from memory. Deserialization will try to restore objects hierarchy with *parent*, its properties and connections. The root object will be created with a *name* in case of this parameter provided.

----

.. _api_ObjectSystem_d6a9437b:

 :ref:`Variant<api_Variant>`  **ObjectSystem::toVariant** (:ref:`Object<api_Object>` * *object*, bool  *force* = false)

Returns serialized to Variant version of *object* inherited from Object class. This method saves all *object* property values, active connections and necessary parameters.


**Note:** All childs of *object* will be also serialized.



**Note:** Function will ignore Object::isSerializable in case of *force* flag provided.


The returned value can be saved on disk in BSON or JSON form or keep it in memory. Developers is able to save own data using Object::saveUserData() mechanism.


