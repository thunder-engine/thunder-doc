.. _api_Json:

Json
====

Inherited: None

.. _api_Json_description:

Description
-----------

This class implements Json parser with Variant based DOM structure input/output. It allows to serialize and deserialize object structures represented in Variant DOM structure.

Example:

::

    VariantMap dictionary;
    dictionary["bool"]  = true;
    dictionary["str"]   = "string";
    dictionary["int"]   = 1;
    dictionary["float"] = 2.0f;
    
    string data = Json::save(dictionary); // Serializing dictionary to string
    ....
    VariantMap result = Json::load(data).toMap(); // Resotoring it back



.. _api_Json_public:

Public Methods
--------------

None



.. _api_Json_static:

Static Methods
--------------

+------------------------------+--------------------------------------------------------------------------+
|  :ref:`Variant<api_Variant>` | :ref:`load<api_Json_e850327f>` (const TString & data)                    |
+------------------------------+--------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`save<api_Json_8a2d6f9c>` (const Variant & data, int32_t  tab = -1) |
+------------------------------+--------------------------------------------------------------------------+

.. _api_Json_methods:

Methods Description
-------------------

.. _api_Json_e850327f:

 :ref:`Variant<api_Variant>`  **Json::load** (:ref:`TString<api_TString>` & *data*)

Returns deserialized string *data* as Variant based DOM structure.

----

.. _api_Json_8a2d6f9c:

 :ref:`TString<api_TString>`  **Json::save** (:ref:`Variant<api_Variant>` & *data*, int32_t  *tab* = -1)

Returns serialized *data* as string. Argument *tab* is used as JSON tabulation formatting offset (-1 for one line JSON)


