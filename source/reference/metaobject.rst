.. _api_MetaObject:

MetaObject
==========

Inherited: None

.. _api_MetaObject_description:

Description
-----------

This class is a part of Object-Introspection-Mechanism. MetaObject provides information about one particular class inherited from base Object class. Developers are able to retrieve information about properties, methods and inheritance chains.

This class is actively used in Signal-Slot mechanism.



.. _api_MetaObject_public:

Public Methods
--------------

+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                           | :ref:`MetaObject<api_MetaObject_b2a50d37>` (const char * name, const MetaObject * super, const MetaObject::Constructor  constructor, const MetaMethod::Table * methods, const MetaProperty::Table * props, const MetaEnum::Table * enums) |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                      bool | :ref:`canCastTo<api_MetaObject_8ca7d1e5>` (const char * type) const                                                                                                                                                                       |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`Object<api_Object>` * | :ref:`createInstance<api_MetaObject_1824cd3a>` () const                                                                                                                                                                                   |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`MetaEnum<api_MetaEnum>` | :ref:`enumerator<api_MetaObject_6ec28b5d>` (int  index) const                                                                                                                                                                             |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`enumeratorCount<api_MetaObject_496f3db1>` () const                                                                                                                                                                                  |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`enumeratorOffset<api_MetaObject_f523bd6a>` () const                                                                                                                                                                                 |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`indexOfEnumerator<api_MetaObject_fd96a481>` (const char * name) const                                                                                                                                                               |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`indexOfMethod<api_MetaObject_1754c0fa>` (const char * signature) const                                                                                                                                                              |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`indexOfProperty<api_MetaObject_fac50624>` (const char * name) const                                                                                                                                                                 |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`indexOfSignal<api_MetaObject_8cdf61a3>` (const char * signature) const                                                                                                                                                              |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`indexOfSlot<api_MetaObject_f5cd391e>` (const char * signature) const                                                                                                                                                                |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|         :ref:`MetaMethod<api_MetaMethod>` | :ref:`method<api_MetaObject_91df580c>` (int  index) const                                                                                                                                                                                 |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`methodCount<api_MetaObject_528ec04f>` () const                                                                                                                                                                                      |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`methodOffset<api_MetaObject_3d7cf5ab>` () const                                                                                                                                                                                     |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                const char | :ref:`name<api_MetaObject_15b6dac9>` () const                                                                                                                                                                                             |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|     :ref:`MetaProperty<api_MetaProperty>` | :ref:`property<api_MetaObject_07f8d5c1>` (int  index) const                                                                                                                                                                               |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`propertyCount<api_MetaObject_f04c9b3a>` () const                                                                                                                                                                                    |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`propertyOffset<api_MetaObject_826df371>` () const                                                                                                                                                                                   |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| const :ref:`MetaObject<api_MetaObject>` * | :ref:`super<api_MetaObject_6fd87eb1>` () const                                                                                                                                                                                            |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+



.. _api_MetaObject_static:

Static Methods
--------------

None

.. _api_MetaObject_methods:

Methods Description
-------------------

.. _api_MetaObject_b2a50d37:

**MetaObject::MetaObject** (char * *name*, :ref:`MetaObject<api_MetaObject>` * *super*, :ref:`MetaObject::Constructor<api_MetaObject_Constructor>`  *constructor*, :ref:`MetaMethod::Table<api_MetaMethod_Table>` * *methods*, :ref:`MetaProperty::Table<api_MetaProperty_Table>` * *props*, :ref:`MetaEnum::Table<api_MetaEnum_Table>` * *enums*)

Constructs MetaObject object for Object with type name, inherited from *super* class and provided constructor, methods, *props* and enums.

----

.. _api_MetaObject_8ca7d1e5:

 bool **MetaObject::canCastTo** (char * *type*) const

Checks the abillity to cast the current object to type.


**Note:** This method tries to go through inheritance to find a common parent class.


Returns true if object can be cast to type; otherwise returns false.

----

.. _api_MetaObject_1824cd3a:

 :ref:`Object<api_Object>` * **MetaObject::createInstance** () const

Constructs and return a new instance of associated class, or nullptr if no suitable constructor availabale.

----

.. _api_MetaObject_6ec28b5d:

 :ref:`MetaEnum<api_MetaEnum>`  **MetaObject::enumerator** (int  *index*) const

Returns MetaEnum object by provided *index* of enumerator.


**Note:** This method looks through class hierarchy.


----

.. _api_MetaObject_496f3db1:

 int **MetaObject::enumeratorCount** () const

Returns the sum of enumerators for the current class and parent classes.

----

.. _api_MetaObject_f523bd6a:

 int **MetaObject::enumeratorOffset** () const

Returns the first index of enumerator for current class. The offset is the sum of all enumerator in parent classes.

----

.. _api_MetaObject_fd96a481:

 int **MetaObject::indexOfEnumerator** (char * *name*) const

Returns index of class enumerator by provided name; otherwise returns -1.


**Note:** This method looks through class hierarchy.


----

.. _api_MetaObject_1754c0fa:

 int **MetaObject::indexOfMethod** (char * *signature*) const

Returns index of class method by provided signature; otherwise returns -1.


**Note:** This method looks through class hierarchy.


----

.. _api_MetaObject_fac50624:

 int **MetaObject::indexOfProperty** (char * *name*) const

Returns index of class property by provided name; otherwise returns -1.


**Note:** This method looks through class hierarchy.


----

.. _api_MetaObject_8cdf61a3:

 int **MetaObject::indexOfSignal** (char * *signature*) const

Returns index of class signal by provided signature; otherwise returns -1.


**Note:** This method looks through class hierarchy.


----

.. _api_MetaObject_f5cd391e:

 int **MetaObject::indexOfSlot** (char * *signature*) const

Returns index of class slot by provided signature; otherwise returns -1.


**Note:** This method looks through class hierarchy.


----

.. _api_MetaObject_91df580c:

 :ref:`MetaMethod<api_MetaMethod>`  **MetaObject::method** (int  *index*) const

Returns MetaMethod object by provided *index* of method.


**Note:** This method looks through class hierarchy.


----

.. _api_MetaObject_528ec04f:

 int **MetaObject::methodCount** () const

Returns the sum of methods for the current class and parent classes. It's includes signals and slots.

----

.. _api_MetaObject_3d7cf5ab:

 int **MetaObject::methodOffset** () const

Returns the first index of method for current class. The offset is the sum of all methods in parent classes.

----

.. _api_MetaObject_15b6dac9:

const char **MetaObject::name** () const

Returns the name of the object type.

----

.. _api_MetaObject_07f8d5c1:

 :ref:`MetaProperty<api_MetaProperty>`  **MetaObject::property** (int  *index*) const

Returns MetaProperty object by provided *index* of property.


**Note:** This method looks through class hierarchy.


----

.. _api_MetaObject_f04c9b3a:

 int **MetaObject::propertyCount** () const

Returns the sum of properties for the current class and parent classes.

----

.. _api_MetaObject_826df371:

 int **MetaObject::propertyOffset** () const

Returns the first index of property for current class. The offset is the sum of all properties in parent classes.

----

.. _api_MetaObject_6fd87eb1:

const :ref:`MetaObject<api_MetaObject>` * **MetaObject::super** () const

Returns an introspection object for parent class.


