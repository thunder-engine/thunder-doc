.. _api_MetaMethod:

MetaMethod
==========

Inherited: None

.. _api_MetaMethod_description:

Description
-----------

This class is a part of Object-Introspection-Mechanism. MetaMethod provides information about one particular class method. Developers are able to retrieve information about method arguments, return types and etc.

To make methods visible in introspection mechanism, developers must declare those under A_METHODS() macro.



.. _api_MetaMethod_public:

Public Methods
--------------

+------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                                                            | :ref:`MetaMethod<api_MetaMethod_MetaMethod>` (const MetaMethod::Table * table)                                     |
+------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                                                       bool | :ref:`invoke<api_MetaMethod_invoke>` (void * object, Variant & returnValue, int  argc, const Variant * args) const |
+------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                                                       bool | :ref:`isValid<api_MetaMethod_isValid>` () const                                                                    |
+------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                                                 const char | :ref:`name<api_MetaMethod_name>` () const                                                                          |
+------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                                                        int | :ref:`parameterCount<api_MetaMethod_parameterCount>` () const                                                      |
+------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                              :ref:`MetaType<api_MetaType>` | :ref:`parameterType<api_MetaMethod_parameterType>` (int  index) const                                              |
+------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                              :ref:`MetaType<api_MetaType>` | :ref:`returnType<api_MetaMethod_returnType>` () const                                                              |
+------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                                                std::string | :ref:`signature<api_MetaMethod_signature>` () const                                                                |
+------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|    const :ref:`MetaMethod::Table<api_MetaMethod::Table>` * | :ref:`table<api_MetaMethod_table>` () const                                                                        |
+------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|  :ref:`MetaMethod::MethodType<api_MetaMethod::MethodType>` | :ref:`type<api_MetaMethod_type>` () const                                                                          |
+------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+

.. _api_MetaMethod_enums:

Public Enums
------------

.. _api_MetaMethod_MethodType:

**enum MetaMethod::MethodType**

This enum defines base method types.

+--------------------+-------+--------------------------------------------------------------------------------------------+
|           Constant | Value | Description                                                                                |
+--------------------+-------+--------------------------------------------------------------------------------------------+
| MetaMethod::Method | 0     | Standard method can be invoked. Used for general porposes.                                 |
+--------------------+-------+--------------------------------------------------------------------------------------------+
| MetaMethod::Signal | 1     | Method without impelementation can't be invoked. Used for Signals and Slots mechanism.     |
+--------------------+-------+--------------------------------------------------------------------------------------------+
|   MetaMethod::Slot | 2     | Very similar to A_METHOD but with special flag to be used for Signals and Slots mechanism. |
+--------------------+-------+--------------------------------------------------------------------------------------------+
| MetaMethod::Static | 3     | This is a static method and doesn't requires an object to call.                            |
+--------------------+-------+--------------------------------------------------------------------------------------------+



.. _api_MetaMethod_static:

Static Methods
--------------

None

.. _api_MetaMethod_methods:

Methods Description
-------------------

.. _api_MetaMethod_MetaMethod:

**MetaMethod::MetaMethod** (:ref:`MetaMethod::Table<api_MetaMethod::Table>` * *table*)

Constructs MetaMethod object which will contain information provided in a *table*.

----

.. _api_MetaMethod_invoke:

 bool **MetaMethod::invoke** (void * *object*, :ref:`Variant<api_Variant>` & *returnValue*, int  *argc*, :ref:`Variant<api_Variant>` * *args*) const

Calls current method for *object*. Function recieves an argument count in *argc* parameter and *args* array. Function is able to return the result of method invocation in *returnValue*.

Return true on succssed; otherwise returns false.


**Note:** Function checks if current method can be invoked.


----

.. _api_MetaMethod_isValid:

 bool **MetaMethod::isValid** () const

Returns true if method is valid; otherwise returns false.

----

.. _api_MetaMethod_name:

const char **MetaMethod::name** () const

Returns a name of method.

----

.. _api_MetaMethod_parameterCount:

 int **MetaMethod::parameterCount** () const

Returns a parameter count of method.

----

.. _api_MetaMethod_parameterType:

 :ref:`MetaType<api_MetaType>`  **MetaMethod::parameterType** (int  *index*) const

Returns the type of parameter at *index* position.

----

.. _api_MetaMethod_returnType:

 :ref:`MetaType<api_MetaType>`  **MetaMethod::returnType** () const

Returns a return type of method.

----

.. _api_MetaMethod_signature:

 std::string **MetaMethod::signature** () const

Returns method signature in text format.

----

.. _api_MetaMethod_table:

const :ref:`MetaMethod::Table<api_MetaMethod::Table>` * **MetaMethod::table** () const

Returns method information table.

----

.. _api_MetaMethod_type:

 :ref:`MetaMethod::MethodType<api_MetaMethod::MethodType>`  **MetaMethod::type** () const

Returns a type of method.


