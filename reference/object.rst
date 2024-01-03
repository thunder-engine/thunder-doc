.. _api_Object:

Object Class
============

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

+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                           | :ref:`Object<api_Object_Object>` ()                                                              |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                               :ref:`Object<api_Object>` * | :ref:`clone<api_Object_clone>` (Object * parent = nullptr)                                       |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                       int | :ref:`clonedFrom<api_Object_clonedFrom>` () const                                                |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`deleteLater<api_Object_deleteLater>` ()                                                    |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                 const int | :ref:`dynamicPropertyNames<api_Object_dynamicPropertyNames>` () const                            |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`emitSignal<api_Object_emitSignal>` (const char * signal, const Variant & args = Variant()) |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                      bool | :ref:`event<api_Object_event>` (Event * event)                                                   |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                               :ref:`Object<api_Object>` * | :ref:`find<api_Object_find>` (const std::string & path) const                                    |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                   template <typename T> T | :ref:`findChild<api_Object_findChild>` (bool  recursive = true)                                  |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                 template <typename T> int | :ref:`findChildren<api_Object_findChildren>` (bool  recursive)                                   |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
| const :ref:`Object::ObjectList<api_Object::ObjectList>` & | :ref:`getChildren<api_Object_getChildren>` () const                                              |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|     const :ref:`Object::LinkList<api_Object::LinkList>` & | :ref:`getReceivers<api_Object_getReceivers>` () const                                            |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                      bool | :ref:`isSerializable<api_Object_isSerializable>` () const                                        |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`loadData<api_Object_loadData>` (const VariantList & data)                                  |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`loadObjectData<api_Object_loadObjectData>` (const VariantMap & data)                       |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`loadUserData<api_Object_loadUserData>` (const VariantMap & data)                           |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                 const :ref:`MetaObject<api_MetaObject>` * | :ref:`metaObject<api_Object_metaObject>` () const                                                |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`methodCallEvent<api_Object_methodCallEvent>` (MethodCallEvent * event)                     |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                               std::string | :ref:`name<api_Object_name>` () const                                                            |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                               :ref:`Object<api_Object>` * | :ref:`parent<api_Object_parent>` () const                                                        |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`postEvent<api_Object_postEvent>` (Event * event)                                           |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                               :ref:`Variant<api_Variant>` | :ref:`property<api_Object_property>` (const char * name) const                                   |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`removeChild<api_Object_removeChild>` (Object * child)                                      |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                       :ref:`VariantList<api_VariantList>` | :ref:`saveData<api_Object_saveData>` () const                                                    |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                         :ref:`VariantMap<api_VariantMap>` | :ref:`saveUserData<api_Object_saveUserData>` () const                                            |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                               :ref:`Object<api_Object>` * | :ref:`sender<api_Object_sender>` () const                                                        |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`setName<api_Object_setName>` (const std::string & name)                                    |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`setProperty<api_Object_setProperty>` (const char * name, const Variant & value)            |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`setType<api_Object_setType>` (const std::string & type)                                    |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                   :ref:`ObjectSystem<api_ObjectSystem>` * | :ref:`system<api_Object_system>` () const                                                        |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                               std::string | :ref:`typeName<api_Object_typeName>` () const                                                    |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                       int | :ref:`uuid<api_Object_uuid>` () const                                                            |
+-----------------------------------------------------------+--------------------------------------------------------------------------------------------------+

.. _api_Object_enums:

Public Enums
------------

.. _api_Object_LinkList:

**enum Object::LinkList**

Synonym for list<Link *>.

.. _api_Object_ObjectList:

**enum Object::ObjectList**

Synonym for list<Object *>.



.. _api_Object_static:

Static Methods
--------------

+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------+
|                                      bool | :ref:`connect<api_Object_connect>` (Object * sender, const char * signal, Object * receiver, const char * method)       |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------+
|               :ref:`Object<api_Object>` * | :ref:`construct<api_Object_construct>` ()                                                                               |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------+
|                                      void | :ref:`disconnect<api_Object_disconnect>` (Object * sender, const char * signal, Object * receiver, const char * method) |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------+
| const :ref:`MetaObject<api_MetaObject>` * | :ref:`metaClass<api_Object_metaClass>` ()                                                                               |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------+

.. _api_Object_methods:

Methods Description
-------------------

.. _api_Object_Object:

**Object::Object** ()

Constructs an object.

By default Object create without parent to assign the parent object use setParent().

----

.. _api_Object_clone:

 :ref:`Object<api_Object>`* **Object::clone** (:ref:`Object<api_Object>` * *parent* = nullptr)

Clones this object. Returns pointer to clone object.

When you clone the Object or subclasses of it, all child objects also will be cloned. By default the *parent* for the new object will be nullptr. This clone will not have the unique name so you will need to set it manualy if required.

Warning: Connections will NOT be transferred and the developer must create them manually.

**See also** connect().

----

.. _api_Object_clonedFrom:

 int **Object::clonedFrom** () const

Returns the UUID of cloned object.

----

.. _api_Object_connect:

 bool **Object::connect** (:ref:`Object<api_Object>` * *sender*, char * *signal*, :ref:`Object<api_Object>` * *receiver*, char * *method*)

Creates connection beteen the *signal* of the *sender* and the *method* of the *receiver*. Returns true if successful; otherwise returns false.

You must use the _SIGNAL() and _SLOT() macros when specifying *signal* and the *method*.

**Note:** The _SIGNAL() and _SLOT() must not contain any parameter values only parameter types.

::

    class MyObject : public Object {
        A_OVERRIDE(MyObject, Object, Core)
    
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

Signal can also be conected to another *signal*.

::

    MyObject obj1;
    MyObject obj2;
    
    Object::connect(&obj1, _SIGNAL(signal(bool)), &obj2, _SIGNAL(signal(bool)));

----

.. _api_Object_construct:

 :ref:`Object<api_Object>`* **Object::construct** ()

Returns new instance of Object class. This method is used in MetaObject system.

**See also** MetaObject.

----

.. _api_Object_deleteLater:

 void **Object::deleteLater** ()

Marks this object to be deleted. This object will be deleted when event loop will call processEvents() method for this object.

----

.. _api_Object_disconnect:

 void **Object::disconnect** (:ref:`Object<api_Object>` * *sender*, char * *signal*, :ref:`Object<api_Object>` * *receiver*, char * *method*)

Disconnects *signal* in object *sender* from *method* in object *receiver*.

A connection is removed when either of the objects are destroyed.

disconnect() can be used in three ways:

Disconnect everything from a specific *sender*...

::

    Object::disconnect(&obj1, 0, 0, 0);

Disconnect everything connected to a specific *signal*...

::

    Object::disconnect(&obj1, _SIGNAL(signal(bool)), 0, 0);

Disconnect all connections from the *receiver*...

::

    Object::disconnect(&obj1, 0, &obj3, 0);

**See also** connect().

----

.. _api_Object_dynamicPropertyNames:

const int **Object::dynamicPropertyNames** () const

Returns the names of all properties that were dynamically added to the object using setProperty()

----

.. _api_Object_emitSignal:

 void **Object::emitSignal** (char * *signal*, :ref:`Variant<api_Variant>` & *args* = Variant())

Send specific *signal* with *args* for all connected receivers.

For now it places *signal* directly to receivers queues. In case of another *signal* connected as method this *signal* will be emitted immediately.

**Note:** Receiver should be in event loop to process incoming message.

**See also** connect().

----

.. _api_Object_event:

 bool **Object::event** (:ref:`Event<api_Event>` * *event*)

Abstract *event* handler. Developers should reimplement this method to handle *event*s manually. Returns true in case of *event* was handled otherwise return false.

----

.. _api_Object_find:

 :ref:`Object<api_Object>`* **Object::find** (std::string & *path*) const

Returns an object located along the *path*.

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

.. _api_Object_findChild:

template <typename T> T **Object::findChild** (bool  *recursive* = true)

Returns the first child of this object that can be cast to type T. The search is performed *recursive*ly, unless *recursive* option is false.

Returns nullptr if no such object.

**See also** find() and findChildren().

----

.. _api_Object_findChildren:

template <typename T> int **Object::findChildren** (bool  *recursive*)

Returns all children of this object that can be cast to type T. The search is performed *recursive*ly, unless *recursive* option is false.

Returns empty list if no such objects.

**See also** find() and findChildren().

----

.. _api_Object_getChildren:

const :ref:`Object::ObjectList<api_Object::ObjectList>`& **Object::getChildren** () const

Returns list of child objects for this object.

----

.. _api_Object_getReceivers:

const :ref:`Object::LinkList<api_Object::LinkList>`& **Object::getReceivers** () const

Returns list of links to receivers objects for this object.

----

.. _api_Object_isSerializable:

 bool **Object::isSerializable** () const

Returns true if the object can be serialized; otherwise returns false.

----

.. _api_Object_loadData:

 void **Object::loadData** (:ref:`VariantList<api_VariantList>` & *data*)

This method allows to DESERIALIZE *data* of object like properties, connections and user *data*.

----

.. _api_Object_loadObjectData:

 void **Object::loadObjectData** (:ref:`VariantMap<api_VariantMap>` & *data*)

This method allows to DESERIALIZE *data*. It can be used to DESERIALIZE some specific *data* like prefabs.

----

.. _api_Object_loadUserData:

 void **Object::loadUserData** (:ref:`VariantMap<api_VariantMap>` & *data*)

This method allows to DESERIALIZE *data* which not present as A_PROPERTY() in object.

----

.. _api_Object_metaClass:

const :ref:`MetaObject<api_MetaObject>`* **Object::metaClass** ()

Returns MetaObject and can be invoke without object of current class. This method is used in MetaObject system.

**See also** MetaObject.

----

.. _api_Object_metaObject:

const :ref:`MetaObject<api_MetaObject>`* **Object::metaObject** () const

Returns ponter MetaObject of this object. This method is used in MetaObject system.

**See also** MetaObject.

----

.. _api_Object_methodCallEvent:

 void **Object::methodCallEvent** (:ref:`MethodCallEvent<api_MethodCallEvent>` * *event*)

Method call *event* handler. Can be reimplemented to support different logic.

----

.. _api_Object_name:

 std::string **Object::name** () const

Returns name of the object.

**See also** setName().

----

.. _api_Object_parent:

 :ref:`Object<api_Object>`* **Object::parent** () const

Returns a pointer to the parent object.

----

.. _api_Object_postEvent:

 void **Object::postEvent** (:ref:`Event<api_Event>` * *event*)

Place *event* to internal *event* queue to be processed in *event* loop.

----

.. _api_Object_property:

 :ref:`Variant<api_Variant>` **Object::property** (char * *name*) const

Returns the value of the object's property by *name*.

If property not found returns invalid Variant. Information of all properties which provided by this object can be found in MetaObject.

**See also** setProperty(), metaObject(), and Variant::isValid().

----

.. _api_Object_removeChild:

 void **Object::removeChild** (:ref:`Object<api_Object>` * *child*)

Removes a *child* object from the internal list of *child*ren.

----

.. _api_Object_saveData:

 :ref:`VariantList<api_VariantList>` **Object::saveData** () const

This method allows to SERIALIZE all object data like properties connections and user data. Returns serialized data as VariantList.

----

.. _api_Object_saveUserData:

 :ref:`VariantMap<api_VariantMap>` **Object::saveUserData** () const

This method allows to SERIALIZE data which not present as A_PROPERTY() in object. Returns serialized data as VariantMap.

----

.. _api_Object_sender:

 :ref:`Object<api_Object>`* **Object::sender** () const

Returns object which sent signal.

**Note:** This method returns a valid object only in receiver slot otherwise it's return nullptr

----

.. _api_Object_setName:

 void **Object::setName** (std::string & *name*)

Set object *name* by provided *name*.

**See also** *name*() and metaObject().

----

.. _api_Object_setProperty:

 void **Object::setProperty** (char * *name*, :ref:`Variant<api_Variant>` & *value*)

Sets the property with *name* to *value*.

If property not found do nothing. Property must be defined as A_PROPERTY(). Information of all properties which provided by this object can be found in MetaObject.

**See also** property(), metaObject(), and Variant::isValid().

----

.. _api_Object_setType:

 void **Object::setType** (std::string & *type*)

Specify an additional *type* for the object.

**Note:** Most of the time this method does nothing.

----

.. _api_Object_system:

 :ref:`ObjectSystem<api_ObjectSystem>`* **Object::system** () const

Returns System which handles this object.

----

.. _api_Object_typeName:

 std::string **Object::typeName** () const

Returns class name the object.

----

.. _api_Object_uuid:

 int **Object::uuid** () const

Returns unique ID of the object.


