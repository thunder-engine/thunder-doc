.. _api_MetaObject:
MetaObject Class
================

Inherited: None

.. _api_MetaObject_description:
Description
-----------

This class is a part of Object-Introspection-Mechanism. MetaObject provides information about one particular class inherited from base Object class. Developers are able to retrieve information about properties, methods and inheritance chains.

This class is actively used in Signal-Slot mechanism.



.. _api_MetaObject_public:
Public Methods
--------------

+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                 | :ref:`MetaObject<api_MetaObject_MetaObject>` (const char * name, const MetaObject * super, const MetaObject::Constructor  constructor, const MetaMethod::Table * methods, const MetaProperty::Table * props, const MetaEnum::Table * enums) |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           :ref:`bool<api_bool>` | :ref:`canCastTo<api_MetaObject_canCastTo>` (const char * type) const                                                                                                                                                                        |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                     :ref:`Object<api_Object>` * | :ref:`createInstance<api_MetaObject_createInstance>` () const                                                                                                                                                                               |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                   :ref:`MetaEnum<api_MetaEnum>` | :ref:`enumerator<api_MetaObject_enumerator>` (int  index) const                                                                                                                                                                             |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`enumeratorCount<api_MetaObject_enumeratorCount>` () const                                                                                                                                                                             |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`enumeratorOffset<api_MetaObject_enumeratorOffset>` () const                                                                                                                                                                           |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`indexOfEnumerator<api_MetaObject_indexOfEnumerator>` (const char * name) const                                                                                                                                                        |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`indexOfMethod<api_MetaObject_indexOfMethod>` (const char * signature) const                                                                                                                                                           |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`indexOfProperty<api_MetaObject_indexOfProperty>` (const char * name) const                                                                                                                                                            |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`indexOfSignal<api_MetaObject_indexOfSignal>` (const char * signature) const                                                                                                                                                           |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`indexOfSlot<api_MetaObject_indexOfSlot>` (const char * signature) const                                                                                                                                                               |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`MetaMethod<api_MetaMethod>` | :ref:`method<api_MetaObject_method>` (int  index) const                                                                                                                                                                                     |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`methodCount<api_MetaObject_methodCount>` () const                                                                                                                                                                                     |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`methodOffset<api_MetaObject_methodOffset>` () const                                                                                                                                                                                   |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`const char<api_const char>` * | :ref:`name<api_MetaObject_name>` () const                                                                                                                                                                                                   |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|           :ref:`MetaProperty<api_MetaProperty>` | :ref:`property<api_MetaObject_property>` (int  index) const                                                                                                                                                                                 |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`propertyCount<api_MetaObject_propertyCount>` () const                                                                                                                                                                                 |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`propertyOffset<api_MetaObject_propertyOffset>` () const                                                                                                                                                                               |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| :ref:`const MetaObject<api_const MetaObject>` * | :ref:`super<api_MetaObject_super>` () const                                                                                                                                                                                                 |
+-------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _api_MetaObject_enums:
Public Enums
--------------

.. _api_MetaObject_Constructor:
**enum MetaObject::Constructor**

Callback which contain address to method to construct new Object with represented type.



.. _api_MetaObject_static:
Static Methods
--------------

None

.. _api_MetaObject_methods:
Methods Description
-------------------

.. _api_MetaObject_MetaObject:

**MetaObject::MetaObject** (:ref:`char<api_char>` * *name*, :ref:`MetaObject<api_MetaObject>` * *super*, :ref:`MetaObject::Constructor<api_MetaObject::Constructor>`  *constructor*, :ref:`MetaMethod::Table<api_MetaMethod::Table>` * *methods*, :ref:`MetaProperty::Table<api_MetaProperty::Table>` * *props*, :ref:`MetaEnum::Table<api_MetaEnum::Table>` * *enums*)

Constructs MetaObject object for Object with type *name*, inherited from *super* class and provided *constructor*, *methods*, *props* and *enums*.

----

.. _api_MetaObject_canCastTo:

:ref:`bool<api_bool>`  **MetaObject::canCastTo** (:ref:`char<api_char>` * *type*) const

Checks the abillity to cast the current object to *type*.

**Note:** This method tries to go through inheritance to find a common parent class.

Returns true if object can be cast to *type*; otherwise returns false.

----

.. _api_MetaObject_createInstance:

:ref:`Object<api_Object>` * **MetaObject::createInstance** () const

Constructs and return a new instance of associated class.

----

.. _api_MetaObject_enumerator:

:ref:`MetaEnum<api_MetaEnum>`  **MetaObject::enumerator** (:ref:`int<api_int>`  *index*) const

Returns MetaEnum object by provided *index* of enumerator.

**Note:** This method looks through class hierarchy.

----

.. _api_MetaObject_enumeratorCount:

:ref:`int<api_int>`  **MetaObject::enumeratorCount** () const

Returns the sum of enumerators for the current class and parent classes.

----

.. _api_MetaObject_enumeratorOffset:

:ref:`int<api_int>`  **MetaObject::enumeratorOffset** () const

Returns the first index of enumerator for current class. The offset is the sum of all enumerator in parent classes.

----

.. _api_MetaObject_indexOfEnumerator:

:ref:`int<api_int>`  **MetaObject::indexOfEnumerator** (:ref:`char<api_char>` * *name*) const

Returns index of class enumerator by provided *name*; otherwise returns -1.

**Note:** This method looks through class hierarchy.

----

.. _api_MetaObject_indexOfMethod:

:ref:`int<api_int>`  **MetaObject::indexOfMethod** (:ref:`char<api_char>` * *signature*) const

Returns index of class method by provided *signature*; otherwise returns -1.

**Note:** This method looks through class hierarchy.

----

.. _api_MetaObject_indexOfProperty:

:ref:`int<api_int>`  **MetaObject::indexOfProperty** (:ref:`char<api_char>` * *name*) const

Returns index of class property by provided *name*; otherwise returns -1.

**Note:** This method looks through class hierarchy.

----

.. _api_MetaObject_indexOfSignal:

:ref:`int<api_int>`  **MetaObject::indexOfSignal** (:ref:`char<api_char>` * *signature*) const

Returns index of class signal by provided *signature*; otherwise returns -1.

**Note:** This method looks through class hierarchy.

----

.. _api_MetaObject_indexOfSlot:

:ref:`int<api_int>`  **MetaObject::indexOfSlot** (:ref:`char<api_char>` * *signature*) const

Returns index of class slot by provided *signature*; otherwise returns -1.

**Note:** This method looks through class hierarchy.

----

.. _api_MetaObject_method:

:ref:`MetaMethod<api_MetaMethod>`  **MetaObject::method** (:ref:`int<api_int>`  *index*) const

Returns MetaMethod object by provided *index* of method.

**Note:** This method looks through class hierarchy.

----

.. _api_MetaObject_methodCount:

:ref:`int<api_int>`  **MetaObject::methodCount** () const

Returns the sum of methods for the current class and parent classes. It's includes signals and slots.

----

.. _api_MetaObject_methodOffset:

:ref:`int<api_int>`  **MetaObject::methodOffset** () const

Returns the first index of method for current class. The offset is the sum of all methods in parent classes.

----

.. _api_MetaObject_name:

:ref:`const char<api_const char>` * **MetaObject::name** () const

Returns the name of the object type.

----

.. _api_MetaObject_property:

:ref:`MetaProperty<api_MetaProperty>`  **MetaObject::property** (:ref:`int<api_int>`  *index*) const

Returns MetaProperty object by provided *index* of property.

**Note:** This method looks through class hierarchy.

----

.. _api_MetaObject_propertyCount:

:ref:`int<api_int>`  **MetaObject::propertyCount** () const

Returns the sum of properties for the current class and parent classes.

----

.. _api_MetaObject_propertyOffset:

:ref:`int<api_int>`  **MetaObject::propertyOffset** () const

Returns the first index of property for current class. The offset is the sum of all properties in parent classes.

----

.. _api_MetaObject_super:

:ref:`const MetaObject<api_const MetaObject>` * **MetaObject::super** () const

Returns an introspection object for parent class.

----


