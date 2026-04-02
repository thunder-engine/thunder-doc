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

+------------------------------------------------------------+------------------------------------------------------------------------------------+
|                                                            | :ref:`MetaProperty<api_MetaProperty_7ac5e620>` (const MetaProperty::Table * table) |
+------------------------------------------------------------+------------------------------------------------------------------------------------+
|                                                       bool | :ref:`isValid<api_MetaProperty_4e8da2b9>` () const                                 |
+------------------------------------------------------------+------------------------------------------------------------------------------------+
|                                                 const char | :ref:`name<api_MetaProperty_570cbed9>` () const                                    |
+------------------------------------------------------------+------------------------------------------------------------------------------------+
| const :ref:`MetaProperty::Table<api_MetaProperty_Table>` * | :ref:`table<api_MetaProperty_eab09734>` () const                                   |
+------------------------------------------------------------+------------------------------------------------------------------------------------+
|                        const :ref:`MetaType<api_MetaType>` | :ref:`type<api_MetaProperty_e560a8c1>` () const                                    |
+------------------------------------------------------------+------------------------------------------------------------------------------------+



.. _api_MetaProperty_static:

Static Methods
--------------

None

.. _api_MetaProperty_methods:

Methods Description
-------------------

.. _api_MetaProperty_7ac5e620:

**MetaProperty::MetaProperty** (:ref:`MetaProperty::Table<api_MetaProperty::Table>` * *table*)

Constructs MetaProperty object which will contain information provided in a *table*.

----

.. _api_MetaProperty_4e8da2b9:

 bool **MetaProperty::isValid** () const

Returns true if property is valid; otherwise returns false.

----

.. _api_MetaProperty_570cbed9:

const char **MetaProperty::name** () const

Returns a name of method.

----

.. _api_MetaProperty_eab09734:

const :ref:`MetaProperty::Table<api_MetaProperty::Table>` * **MetaProperty::table** () const

Returns property information table.

----

.. _api_MetaProperty_e560a8c1:

const :ref:`MetaType<api_MetaType>`  **MetaProperty::type** () const

Returns a type of property.


