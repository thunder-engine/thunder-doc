.. _api_Json:
Json Class
================

Inherited: None

.. _api_Json_description:
Description
-----------

JSON format parser.

This class implements Json parser with Variant based DOM structure input/output. It allows to serialize and deserialize object structures represented in Variant DOM structure.

Example:



.. _api_Json_public:
Public Methods
--------------

None

.. _api_Json_static:
Static Methods
--------------

+-----------------------------+--------------------------------------------------------+
| :ref:`Variant<api_Variant>` | :ref:`load<api_Json_load>` (const int & data)          |
+-----------------------------+--------------------------------------------------------+
|         :ref:`int<api_int>` | :ref:`save<api_Json_save>` (const Variant & , in  int) |
+-----------------------------+--------------------------------------------------------+

.. _api_Json_methods:
Methods Description
-------------------

.. _api_Json_load:

:ref:`Variant<api_Variant>`  **Json::load** (:ref:`int<api_int>` & *data*)

Returns deserialized string *data* as Variant based DOM structure.

----

.. _api_Json_save:

:ref:`int<api_int>`  **Json::save** (:ref:`Variant<api_Variant>` & **, :ref:`in<api_in>`  *int*)

Returns **serialized **data **as **string. **Argument **tab **is **used **as **JSON **tabulation **formatting **offset **(-1 **for **one **line **JSON)

----


