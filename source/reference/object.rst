.. _api_Object:

Object
======

Inherited: None

.. _api_Object_description:

Description
-----------

The object is the central part of the Next library. For communication between objects two mechanisms was implemented the signals and slots also event based approach. To connect two objects between use connect() method and the sender object will notify the receiver object about necessary events.

Objects can be organized into an object trees. Each object can have an unlimited number of children objects. When you assign parent to an object it automatically add itself to the parent children list. Parent object takes ownership of the child object. This means that the child will be automatically deleted if the parent object is deleted. Child object can be found in hierarchy of objects by path or by the type using find(), findChild() or findChildren().

Each Object has name() and this name must be unique in space of object level in hierarchy i.e. parent with name "House" can't has two childs with name "Roof". This names is used to reach objects by its paths land.find("House/Roof") will return "Roof" object.

Each Object has MetaObject declaration. MetaObject system can be used to declare and retrieve structure of object at runtime.

Based on Actor model the object can't be copied only clone().



.. _api_Object_public:

Public Methods
--------------

+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                            | :ref:`Object<api_Object_1c529fb8>` ()                                                                |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`addChild<api_Object_b9a32fe1>` (Object * child, int32_t  position = -1)                        |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`blockSerialization<api_Object_a401be26>` (bool  block)                                         |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`blockSignals<api_Object_bfe670d8>` (bool  block)                                               |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                :ref:`Object<api_Object>` * | :ref:`clone<api_Object_9b75460a>` (Object * parent = nullptr)                                        |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                   uint32_t | :ref:`clonedFrom<api_Object_ce908afb>` () const                                                      |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`deleteLater<api_Object_1dfc5647>` ()                                                           |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                :ref:`TString<api_TString>` | :ref:`dynamicPropertyInfo<api_Object_345c6e8f>` (const char * property)                              |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                           const StringList | :ref:`dynamicPropertyNames<api_Object_29dfb8a5>` () const                                            |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`emitSignal<api_Object_70a83fe2>` (const char * signal, const Variant & args = Variant())       |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       bool | :ref:`event<api_Object_32e815f9>` (Event * event)                                                    |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                :ref:`Object<api_Object>` * | :ref:`find<api_Object_2b87acf6>` (const TString & path)                                              |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                    template <typename T> T | :ref:`findChild<api_Object_0236e1bf>` (bool  recursive = true)                                       |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
| template <typename T> :ref:`std::list<T><api_std_list<T>>` | :ref:`findChildren<api_Object_34c687b1>` (bool  recursive = true)                                    |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                   const Object::ObjectList | :ref:`getChildren<api_Object_7fb2c0d5>` () const                                                     |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|       const :ref:`Object::LinkList<api_Object_LinkList>` & | :ref:`getReceivers<api_Object_ed507b23>` () const                                                    |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       bool | :ref:`isSerializable<api_Object_3bdca962>` () const                                                  |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       bool | :ref:`isSignalsBlocked<api_Object_70fd1c63>` () const                                                |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`loadData<api_Object_3c0a85bf>` (const VariantList & data)                                      |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`loadObjectData<api_Object_c0612aeb>` (const VariantMap & data)                                 |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`loadUserData<api_Object_8f0bd253>` (const VariantMap & data)                                   |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`methodCallEvent<api_Object_da6e4b71>` (MethodCallEvent * event)                                |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                :ref:`TString<api_TString>` | :ref:`name<api_Object_12e6a07b>` () const                                                            |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                :ref:`Object<api_Object>` * | :ref:`parent<api_Object_81fb3c75>` () const                                                          |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`postEvent<api_Object_b52d73e8>` (Event * event)                                                |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                :ref:`Variant<api_Variant>` | :ref:`property<api_Object_cbd91684>` (const char * name) const                                       |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`removeChild<api_Object_2fe57bd1>` (Object * child)                                             |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                VariantList | :ref:`saveData<api_Object_e69058c2>` () const                                                        |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                 VariantMap | :ref:`saveUserData<api_Object_25b9df14>` () const                                                    |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                :ref:`Object<api_Object>` * | :ref:`sender<api_Object_b71e90dc>` () const                                                          |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`setDynamicPropertyInfo<api_Object_46c8f0a7>` (const char * property, const char * info)        |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`setName<api_Object_16cbfd73>` (const TString & name)                                           |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`setParent<api_Object_8320de47>` (Object * parent, int32_t  position = -1, bool  force = false) |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`setProperty<api_Object_1ba6f95d>` (const char * name, const Variant & value)                   |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`setType<api_Object_c810f726>` (const TString & type)                                           |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                    :ref:`ObjectSystem<api_ObjectSystem>` * | :ref:`system<api_Object_0f74d3b9>` () const                                                          |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                :ref:`TString<api_TString>` | :ref:`typeName<api_Object_abfe9674>` () const                                                        |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+
|                                                   uint32_t | :ref:`uuid<api_Object_3a825d40>` () const                                                            |
+------------------------------------------------------------+------------------------------------------------------------------------------------------------------+



.. _api_Object_static:

Static Methods
--------------

+-------+-----------------------------------------------------------------------------------------------------------------------+
|  bool | :ref:`connect<api_Object_2d57aebc>` (Object * sender, const char * signal, Object * receiver, const char * method)    |
+-------+-----------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`disconnect<api_Object_380c7e6a>` (Object * sender, const char * signal, Object * receiver, const char * method) |
+-------+-----------------------------------------------------------------------------------------------------------------------+

.. _api_Object_methods:

Methods Description
-------------------

.. _api_Object_1c529fb8:

**Object::Object** ()

Constructs an object.

By default Object create without parent to assign the parent object use setParent().

----

.. _api_Object_b9a32fe1:

 void **Object::addChild** (:ref:`Object<api_Object>` * *child*, int32_t  *position* = -1)

Pushes a *child* object to the internal list of children at given position.

----

.. _api_Object_a401be26:

 void **Object::blockSerialization** (bool  *block*)

If *block* is true, the object will be serialized. This flag will be applied to all children in hierarchy.

----

.. _api_Object_bfe670d8:

 void **Object::blockSignals** (bool  *block*)

If *block* is true, signals emitted by this object will be discarded (i.e., emitting a signal will not invoke anything connected to it).

----

.. _api_Object_9b75460a:

 :ref:`Object<api_Object>` * **Object::clone** (:ref:`Object<api_Object>` * *parent* = nullptr)

Clones this object. Returns pointer to clone object.

When you clone the Object or subclasses of it, all child objects also will be cloned. By default the *parent* for the new object will be nullptr. This clone will not have the unique name so you will need to set it manualy if required.


Warning: Connections will NOT be transferred and the developer must create them manually.


**See also** connect().

----

.. _api_Object_ce908afb:

 uint32_t **Object::clonedFrom** () const

Returns the UUID of cloned object.

----

.. _api_Object_2d57aebc:

 bool **Object::connect** (:ref:`Object<api_Object>` * *sender*, char * *signal*, :ref:`Object<api_Object>` * *receiver*, char * *method*)

Creates connection beteen the *signal* of the *sender* and the *method* of the receiver. Returns true if successful; otherwise returns false.

You must use the _SIGNAL() and _SLOT() macros when specifying *signal* and the method.


**Note:** The _SIGNAL() and _SLOT() must not contain any parameter values only parameter types.


::

    class MyObject : public Object {
        A_OBJECT_OVERRIDE(MyObject, Object, Core)
    
        A_METHODS(
            A_SLOT(onSignal),
            A_SIGNAL(signal)
        )
    public:
        void signal(bool value);
    
        void onSignal(bool value) {
            // Do some actions here
            ...
        }
    };
    ...
    MyObject obj1;
    MyObject obj2;
    
    Object::connect(&obj1, _SIGNAL(signal(bool)), &obj2, _SLOT(onSignal(bool)));


**Note:** Mehod *signal* in MyObject class may not have the implementation. It used only in description purposes in A_SIGNAL(signal) macros.


Signal can also be conected to another signal.

::

    MyObject obj1;
    MyObject obj2;
    
    Object::connect(&obj1, _SIGNAL(signal(bool)), &obj2, _SIGNAL(signal(bool)));

----

.. _api_Object_1dfc5647:

 void **Object::deleteLater** ()

Marks this object to be deleted. This object will be deleted when event loop will call processEvents() method for this object.

----

.. _api_Object_380c7e6a:

 void **Object::disconnect** (:ref:`Object<api_Object>` * *sender*, char * *signal*, :ref:`Object<api_Object>` * *receiver*, char * *method*)

Disconnects *signal* in object *sender* from *method* in object receiver.

A connection is removed when either of the objects are destroyed.

disconnect() can be used in three ways:

Disconnect everything from a specific sender...

::

    Object::disconnect(&obj1, 0, 0, 0);

Disconnect everything connected to a specific signal...

::

    Object::disconnect(&obj1, _SIGNAL(signal(bool)), 0, 0);

Disconnect all connections from the receiver...

::

    Object::disconnect(&obj1, 0, &obj3, 0);

**See also** connect().

----

.. _api_Object_345c6e8f:

 :ref:`TString<api_TString>`  **Object::dynamicPropertyInfo** (char * *property*)

Returns an additional information for the dynamic property.

**See also** setDynamicPropertyInfo().

----

.. _api_Object_29dfb8a5:

const StringList **Object::dynamicPropertyNames** () const

Returns the names of all properties that were dynamically added to the object using setProperty()

----

.. _api_Object_70a83fe2:

 void **Object::emitSignal** (char * *signal*, :ref:`Variant<api_Variant>` & *args* = Variant())

Send specific *signal* with *args* for all connected receivers.

For now it places *signal* directly to receivers queues. In case of another *signal* connected as method this *signal* will be emitted immediately.


**Note:** Receiver should be in event loop to process incoming message.


**See also** connect().

----

.. _api_Object_32e815f9:

 bool **Object::event** (:ref:`Event<api_Event>` * *event*)

Abstract *event* handler. Developers should reimplement this method to handle events manually. Returns true in case of *event* was handled otherwise return false.

----

.. _api_Object_2b87acf6:

 :ref:`Object<api_Object>` * **Object::find** (:ref:`TString<api_TString>` & *path*)

Returns an object located along the path.

::

    Object obj1;
    Object obj2;
    
    obj1.setName("MainObject");
    obj2.setName("TestComponent2");
    obj2.setParent(&obj1);
    
    // result will contain pointer to obj2
    Object *result = obj1.find("/MainObject/TestComponent2");

Returns nullptr if no such object.

**See also** findChild().

----

.. _api_Object_0236e1bf:

template <typename T> T **Object::findChild** (bool  *recursive* = true)

Returns the first child of this object that can be cast to type T. The search is performed recursively, unless *recursive* option is false.

Returns nullptr if no such object.

**See also** find() and findChildren().

----

.. _api_Object_34c687b1:

template <typename T> :ref:`std::list<T><api_std::list<T>>`  **Object::findChildren** (bool  *recursive* = true)

Returns all children of this object that can be cast to type T. The search is performed recursively, unless *recursive* option is false.

Returns empty list if no such objects.

**See also** find() and findChildren().

----

.. _api_Object_7fb2c0d5:

const Object::ObjectList **Object::getChildren** () const

Returns list of child objects for this object.

----

.. _api_Object_ed507b23:

const :ref:`Object::LinkList<api_Object::LinkList>` & **Object::getReceivers** () const

Returns list of links to receivers objects for this object.

----

.. _api_Object_3bdca962:

 bool **Object::isSerializable** () const

Returns true if the object can be serialized; otherwise returns false.

----

.. _api_Object_70fd1c63:

 bool **Object::isSignalsBlocked** () const

Returns true if emission of signals is blocked; otherwise returns false.

----

.. _api_Object_3c0a85bf:

 void **Object::loadData** (VariantList & *data*)

This method allows to DESERIALIZE *data* of object like properties, connections and user data.

----

.. _api_Object_c0612aeb:

 void **Object::loadObjectData** (VariantMap & *data*)

This method allows to DESERIALIZE data. It can be used to DESERIALIZE some specific *data* like prefabs.

----

.. _api_Object_8f0bd253:

 void **Object::loadUserData** (VariantMap & *data*)

This method allows to DESERIALIZE *data* which not present as A_PROPERTY() in object.

----

.. _api_Object_da6e4b71:

 void **Object::methodCallEvent** (:ref:`MethodCallEvent<api_MethodCallEvent>` * *event*)

Method call *event* handler. Can be reimplemented to support different logic.

----

.. _api_Object_12e6a07b:

 :ref:`TString<api_TString>`  **Object::name** () const

Returns name of the object.

**See also** setName().

----

.. _api_Object_81fb3c75:

 :ref:`Object<api_Object>` * **Object::parent** () const

Returns a pointer to the parent object.

**See also** setParent().

----

.. _api_Object_b52d73e8:

 void **Object::postEvent** (:ref:`Event<api_Event>` * *event*)

Place *event* to internal *event* queue to be processed in *event* loop.

----

.. _api_Object_cbd91684:

 :ref:`Variant<api_Variant>`  **Object::property** (char * *name*) const

Returns the value of the object's property by name.

If property not found returns invalid Variant. Information of all properties which provided by this object can be found in MetaObject.

**See also** setProperty() and Variant::isValid().

----

.. _api_Object_2fe57bd1:

 void **Object::removeChild** (:ref:`Object<api_Object>` * *child*)

Removes a *child* object from the internal list of children.

----

.. _api_Object_e69058c2:

 VariantList **Object::saveData** () const

This method allows to SERIALIZE all object data like properties connections and user data. Returns serialized data as VariantList.

----

.. _api_Object_25b9df14:

 VariantMap **Object::saveUserData** () const

This method allows to SERIALIZE data which not present as A_PROPERTY() in object. Returns serialized data as VariantMap.

----

.. _api_Object_b71e90dc:

 :ref:`Object<api_Object>` * **Object::sender** () const

Returns object which sent signal.


**Note:** This method returns a valid object only in receiver slot otherwise it's return nullptr


----

.. _api_Object_46c8f0a7:

 void **Object::setDynamicPropertyInfo** (char * *property*, char * *info*)

Adds additional *info* for the dynamic property.

Can be used to store meta information mostly used for the editor.

**See also** dynamicPropertyInfo().

----

.. _api_Object_16cbfd73:

 void **Object::setName** (:ref:`TString<api_TString>` & *name*)

Set object *name* by provided name.

**See also** name().

----

.. _api_Object_8320de47:

 void **Object::setParent** (:ref:`Object<api_Object>` * *parent*, int32_t  *position* = -1, bool  *force* = false)

Makes the object a child of *parent* at given position.


**Note:** Please ignore the *force* flag it will be provided by the default.


**See also** parent().

----

.. _api_Object_1ba6f95d:

 void **Object::setProperty** (char * *name*, :ref:`Variant<api_Variant>` & *value*)

Sets the property with *name* to value.

If property not found the object adds dynamic property. Property must be defined as A_PROPERTY(). Information of all properties which provided by this object can be found in MetaObject. An invalid *value* will bring to deletion of dynamic property.

**See also** property(), Variant::isValid(), and dynamicPropertyNames().

----

.. _api_Object_c810f726:

 void **Object::setType** (:ref:`TString<api_TString>` & *type*)

Specify an additional *type* for the object.


**Note:** Most of the time this method does nothing.


----

.. _api_Object_0f74d3b9:

 :ref:`ObjectSystem<api_ObjectSystem>` * **Object::system** () const

Returns System which handles this object.

----

.. _api_Object_abfe9674:

 :ref:`TString<api_TString>`  **Object::typeName** () const

Returns class name the object.

----

.. _api_Object_3a825d40:

 uint32_t **Object::uuid** () const

Returns unique ID of the object.


