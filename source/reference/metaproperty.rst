.. _api_MetaProperty:

MetaProperty
============

Inherited: None

.. _api_MetaProperty_description:

Description
-----------

This class is a part of Object-Introspection-Mechanism. MetaProperty provides information about one particular class property. Developers are able to retrieve information about property type, read and write values.

To make properties visible in introspection mechanism, developers must declare those under A_PROPERTIES() macro.



.. _api_MetaProperty_public:

Public Methods
--------------

+------------------------------------------------------------+--------------------------------------------------------------------------------------+
|                                                            | :ref:`MetaProperty<api_MetaProperty_39c6e0fb>` (const MetaProperty::Table * table)   |
+------------------------------------------------------------+--------------------------------------------------------------------------------------+
|                                                       bool | :ref:`isValid<api_MetaProperty_d2165f7b>` () const                                   |
+------------------------------------------------------------+--------------------------------------------------------------------------------------+
|                                                 const char | :ref:`name<api_MetaProperty_c82469d5>` () const                                      |
+------------------------------------------------------------+--------------------------------------------------------------------------------------+
|                                :ref:`Variant<api_Variant>` | :ref:`read<api_MetaProperty_59c7d1ea>` (const void * object) const                   |
+------------------------------------------------------------+--------------------------------------------------------------------------------------+
| const :ref:`MetaProperty::Table<api_MetaProperty_Table>` * | :ref:`table<api_MetaProperty_cd048261>` () const                                     |
+------------------------------------------------------------+--------------------------------------------------------------------------------------+
|                        const :ref:`MetaType<api_MetaType>` | :ref:`type<api_MetaProperty_73f96c0d>` () const                                      |
+------------------------------------------------------------+--------------------------------------------------------------------------------------+
|                                                       void | :ref:`write<api_MetaProperty_13f60d7b>` (void * object, const Variant & value) const |
+------------------------------------------------------------+--------------------------------------------------------------------------------------+



.. _api_MetaProperty_static:

Static Methods
--------------

None

.. _api_MetaProperty_methods:

Methods Description
-------------------

.. _api_MetaProperty_39c6e0fb:

**MetaProperty::MetaProperty** (:ref:`MetaProperty::Table<api_MetaProperty_Table>` * *table*)

Constructs MetaProperty object which will contain information provided in a table.

----

.. _api_MetaProperty_d2165f7b:

 bool **MetaProperty::isValid** () const

Returns true if property is valid; otherwise returns false.

----

.. _api_MetaProperty_c82469d5:

const char **MetaProperty::name** () const

Returns a name of method.

----

.. _api_MetaProperty_59c7d1ea:

 :ref:`Variant<api_Variant>`  **MetaProperty::read** (void * *object*) const

Returns the value as Variant which contain current property of provided object.

----

.. _api_MetaProperty_cd048261:

const :ref:`MetaProperty::Table<api_MetaProperty::Table>` * **MetaProperty::table** () const

Returns property information table.

----

.. _api_MetaProperty_73f96c0d:

const :ref:`MetaType<api_MetaType>`  **MetaProperty::type** () const

Returns a type of property.

----

.. _api_MetaProperty_13f60d7b:

 void **MetaProperty::write** (void * *object*, :ref:`Variant<api_Variant>` & *value*) const

Tries to write a *value* as Variant to provided object.


