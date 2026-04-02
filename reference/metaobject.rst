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
|                                           | :ref:`MetaObject<api_MetaObject_d81af647>` (const char * name, const MetaObject * super, const MetaObject::Constructor  constructor, const MetaMethod::Table * methods, const MetaProperty::Table * props, const MetaEnum::Table * enums) |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                      bool | :ref:`canCastTo<api_MetaObject_d8c642ab>` (const char * type) const                                                                                                                                                                       |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`Object<api_Object>` * | :ref:`createInstance<api_MetaObject_eb4c83d6>` () const                                                                                                                                                                                   |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`MetaEnum<api_MetaEnum>` | :ref:`enumerator<api_MetaObject_2a3c1d0e>` (int  index) const                                                                                                                                                                             |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`enumeratorCount<api_MetaObject_13bde5fc>` () const                                                                                                                                                                                  |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`enumeratorOffset<api_MetaObject_c8d023b4>` () const                                                                                                                                                                                 |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`indexOfEnumerator<api_MetaObject_175c4620>` (const char * name) const                                                                                                                                                               |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`indexOfMethod<api_MetaObject_7c8f4d1a>` (const char * signature) const                                                                                                                                                              |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`indexOfProperty<api_MetaObject_23d1b954>` (const char * name) const                                                                                                                                                                 |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`indexOfSignal<api_MetaObject_521e9873>` (const char * signature) const                                                                                                                                                              |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`indexOfSlot<api_MetaObject_6a45d7f0>` (const char * signature) const                                                                                                                                                                |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|         :ref:`MetaMethod<api_MetaMethod>` | :ref:`method<api_MetaObject_958640e2>` (int  index) const                                                                                                                                                                                 |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`methodCount<api_MetaObject_0ed53ca2>` () const                                                                                                                                                                                      |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`methodOffset<api_MetaObject_d90f8a14>` () const                                                                                                                                                                                     |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                const char | :ref:`name<api_MetaObject_f7ca0e83>` () const                                                                                                                                                                                             |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|     :ref:`MetaProperty<api_MetaProperty>` | :ref:`property<api_MetaObject_4df2bc95>` (int  index) const                                                                                                                                                                               |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`propertyCount<api_MetaObject_561c340a>` () const                                                                                                                                                                                    |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`propertyOffset<api_MetaObject_379a8ced>` () const                                                                                                                                                                                   |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| const :ref:`MetaObject<api_MetaObject>` * | :ref:`super<api_MetaObject_b14e260c>` () const                                                                                                                                                                                            |
+-------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+



.. _api_MetaObject_static:

Static Methods
--------------

None

.. _api_MetaObject_methods:

Methods Description
-------------------

.. _api_MetaObject_d81af647:

**MetaObject::MetaObject** (char * *name*, :ref:`MetaObject<api_MetaObject>` * *super*, :ref:`MetaObject::Constructor<api_MetaObject_Constructor>`  *constructor*, :ref:`MetaMethod::Table<api_MetaMethod_Table>` * *methods*, :ref:`MetaProperty::Table<api_MetaProperty_Table>` * *props*, :ref:`MetaEnum::Table<api_MetaEnum_Table>` * *enums*)

Constructs MetaObject object for Object with type name, inherited from *super* class and provided constructor, methods, *props* and enums.

----

.. _api_MetaObject_d8c642ab:

 bool **MetaObject::canCastTo** (char * *type*) const

Checks the abillity to cast the current object to type.


**Note:** This method tries to go through inheritance to find a common parent class.


Returns true if object can be cast to type; otherwise returns false.

----

.. _api_MetaObject_eb4c83d6:

 :ref:`Object<api_Object>` * **MetaObject::createInstance** () const

Constructs and return a new instance of associated class, or nullptr if no suitable constructor availabale.

----

.. _api_MetaObject_2a3c1d0e:

 :ref:`MetaEnum<api_MetaEnum>`  **MetaObject::enumerator** (int  *index*) const

Returns MetaEnum object by provided *index* of enumerator.


**Note:** This method looks through class hierarchy.


----

.. _api_MetaObject_13bde5fc:

 int **MetaObject::enumeratorCount** () const

Returns the sum of enumerators for the current class and parent classes.

----

.. _api_MetaObject_c8d023b4:

 int **MetaObject::enumeratorOffset** () const

Returns the first index of enumerator for current class. The offset is the sum of all enumerator in parent classes.

----

.. _api_MetaObject_175c4620:

 int **MetaObject::indexOfEnumerator** (char * *name*) const

Returns index of class enumerator by provided name; otherwise returns -1.


**Note:** This method looks through class hierarchy.


----

.. _api_MetaObject_7c8f4d1a:

 int **MetaObject::indexOfMethod** (char * *signature*) const

Returns index of class method by provided signature; otherwise returns -1.


**Note:** This method looks through class hierarchy.


----

.. _api_MetaObject_23d1b954:

 int **MetaObject::indexOfProperty** (char * *name*) const

Returns index of class property by provided name; otherwise returns -1.


**Note:** This method looks through class hierarchy.


----

.. _api_MetaObject_521e9873:

 int **MetaObject::indexOfSignal** (char * *signature*) const

Returns index of class signal by provided signature; otherwise returns -1.


**Note:** This method looks through class hierarchy.


----

.. _api_MetaObject_6a45d7f0:

 int **MetaObject::indexOfSlot** (char * *signature*) const

Returns index of class slot by provided signature; otherwise returns -1.


**Note:** This method looks through class hierarchy.


----

.. _api_MetaObject_958640e2:

 :ref:`MetaMethod<api_MetaMethod>`  **MetaObject::method** (int  *index*) const

Returns MetaMethod object by provided *index* of method.


**Note:** This method looks through class hierarchy.


----

.. _api_MetaObject_0ed53ca2:

 int **MetaObject::methodCount** () const

Returns the sum of methods for the current class and parent classes. It's includes signals and slots.

----

.. _api_MetaObject_d90f8a14:

 int **MetaObject::methodOffset** () const

Returns the first index of method for current class. The offset is the sum of all methods in parent classes.

----

.. _api_MetaObject_f7ca0e83:

const char **MetaObject::name** () const

Returns the name of the object type.

----

.. _api_MetaObject_4df2bc95:

 :ref:`MetaProperty<api_MetaProperty>`  **MetaObject::property** (int  *index*) const

Returns MetaProperty object by provided *index* of property.


**Note:** This method looks through class hierarchy.


----

.. _api_MetaObject_561c340a:

 int **MetaObject::propertyCount** () const

Returns the sum of properties for the current class and parent classes.

----

.. _api_MetaObject_379a8ced:

 int **MetaObject::propertyOffset** () const

Returns the first index of property for current class. The offset is the sum of all properties in parent classes.

----

.. _api_MetaObject_b14e260c:

const :ref:`MetaObject<api_MetaObject>` * **MetaObject::super** () const

Returns an introspection object for parent class.


