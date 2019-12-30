.. _api_Json:
Json Class
================

Inherited: None

.. _api_Json_description:
Description
-----------

This class implements Json parser with Variant based DOM structure input/output. It allows to serialize and deserialize object structures represented in Variant DOM structure.

Example:



.. _api_Json_public:
Public Methods
--------------

None

.. _api_Json_static:
Static Methods
--------------

+-------------------------------------+----------------------------------------------------------------------+
|         :ref:`Variant<api_Variant>` | :ref:`load<api_Json_load>` (const std::string & data)                |
+-------------------------------------+----------------------------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`save<api_Json_save>` (const Variant & data, int32_t  tab = -1) |
+-------------------------------------+----------------------------------------------------------------------+

.. _api_Json_methods:
Methods Description
-------------------

.. _api_Json_load:

:ref:`Variant<api_Variant>`  **Json::load** (:ref:`std::string<api_std::string>` & *data*)

Returns deserialized string *data* as Variant based DOM structure.

----

.. _api_Json_save:

:ref:`std::string<api_std::string>`  **Json::save** (:ref:`Variant<api_Variant>` & *data*, :ref:`int32_t<api_int32_t>`  *tab* = -1)

Returns serialized *data* as string. Argument *tab* is used as JSON *tab*ulation formatting offset (-1 for one line JSON)

----


