.. _api_MetaEnum:
MetaEnum Class
================

Inherited: None

.. _api_MetaEnum_description:
Description
-----------

The MetaEnum provides an interface to retrieve information about object enumerator at runtime.

This class is a part of Object-Introspection-Mechanism. MetaEnum provides information about one particular class enumerator.

To make enumerators visible in introspection mechanism, developers must declare those under A_ENUMS() macro.



.. _api_MetaEnum_public:
Public Methods
--------------

+-----------------------------------------------------------+------------------------------------------------------------------------+
|                                                           | :ref:`MetaEnum<api_MetaEnum_MetaEnum>` (const MetaEnum::Table * table) |
+-----------------------------------------------------------+------------------------------------------------------------------------+
|                                     :ref:`bool<api_bool>` | :ref:`isValid<api_MetaEnum_isValid>` () const                          |
+-----------------------------------------------------------+------------------------------------------------------------------------+
|                       :ref:`const char<api_const char>` * | :ref:`key<api_MetaEnum_key>` (int  index) const                        |
+-----------------------------------------------------------+------------------------------------------------------------------------+
|                                       :ref:`int<api_int>` | :ref:`keyCount<api_MetaEnum_keyCount>` () const                        |
+-----------------------------------------------------------+------------------------------------------------------------------------+
|                       :ref:`const char<api_const char>` * | :ref:`name<api_MetaEnum_name>` () const                                |
+-----------------------------------------------------------+------------------------------------------------------------------------+
| :ref:`const MetaEnum::Table<api_const MetaEnum::Table>` * | :ref:`table<api_MetaEnum_table>` () const                              |
+-----------------------------------------------------------+------------------------------------------------------------------------+
|                                       :ref:`int<api_int>` | :ref:`value<api_MetaEnum_value>` (int  index) const                    |
+-----------------------------------------------------------+------------------------------------------------------------------------+



.. _api_MetaEnum_static:
Static Methods
--------------

None

.. _api_MetaEnum_methods:
Methods Description
-------------------

.. _api_MetaEnum_MetaEnum:

**MetaEnum::MetaEnum** (:ref:`MetaEnum::Table<api_MetaEnum::Table>` * *table*)

Constructs MetaEnum object which will contain information provided in a *table*.

----

.. _api_MetaEnum_isValid:

:ref:`bool<api_bool>`  **MetaEnum::isValid** () const

Returns true if enumerator is valid; otherwise returns false.

----

.. _api_MetaEnum_key:

:ref:`const char<api_const char>` * **MetaEnum::key** (:ref:`int<api_int>`  *index*) const

Returns the key with the given *index*, or nullptr if no such key exists.

----

.. _api_MetaEnum_keyCount:

:ref:`int<api_int>`  **MetaEnum::keyCount** () const

Returns the number of keys.

----

.. _api_MetaEnum_name:

:ref:`const char<api_const char>` * **MetaEnum::name** () const

Returns a name of enumerator.

----

.. _api_MetaEnum_table:

:ref:`const MetaEnum::Table<api_const MetaEnum::Table>` * **MetaEnum::table** () const

Returns enumerator information table.

----

.. _api_MetaEnum_value:

:ref:`int<api_int>`  **MetaEnum::value** (:ref:`int<api_int>`  *index*) const

Returns the value with the given *index*; or returns -1 if there is no such value.

----


