.. _api_Material:

Material
========

Inherited: None

.. _api_Material_description:

Description
-----------



.. _api_Material_public:

Public Methods
--------------

+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`MaterialInstance<api_MaterialInstance>` * | :ref:`createInstance<api_Material_d4bf3951>` (Material::SurfaceType  type = SurfaceType::Static) |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             bool | :ref:`doubleSided<api_Material_fa0e6c23>` () const                                               |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                              int | :ref:`layers<api_Material_be428916>` () const                                                    |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                              int | :ref:`lightModel<api_Material_8f9ebc76>` () const                                                |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                              int | :ref:`materialType<api_Material_2e98b0c5>` () const                                              |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setDoubleSided<api_Material_9e8ad132>` (bool  flag)                                        |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setLightModel<api_Material_d15a9b0e>` (int  model)                                         |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setMaterialType<api_Material_e1f2738a>` (int  type)                                        |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setPriority<api_Material_b7f9406e>` (int  priority)                                        |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setWireframe<api_Material_6fe7c145>` (bool  wireframe)                                     |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                              int | :ref:`uniformSize<api_Material_cf41a703>` () const                                               |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                             bool | :ref:`wireframe<api_Material_e0c186a7>` () const                                                 |
+--------------------------------------------------+--------------------------------------------------------------------------------------------------+



.. _api_Material_static:

Static Methods
--------------

None

.. _api_Material_methods:

Methods Description
-------------------

.. _api_Material_d4bf3951:

 :ref:`MaterialInstance<api_MaterialInstance>` * **Material::createInstance** (:ref:`Material::SurfaceType<api_Material::SurfaceType>`  *type* = SurfaceType::Static)

Returns a new instance for the material with the provided surface *type*.

----

.. _api_Material_fa0e6c23:

 bool **Material::doubleSided** () const

Returns true if mas marked as double-sided; otherwise returns false.

**See also** setDoubleSided().

----

.. _api_Material_be428916:

 int **Material::layers** () const

Returns layers that supported by this material.

----

.. _api_Material_8f9ebc76:

 int **Material::lightModel** () const

Returns current light model for the material. For more detalse please refer to Material::LightModelType enum.

**See also** setLightModel().

----

.. _api_Material_2e98b0c5:

 int **Material::materialType** () const

Returns current material type. For more detalse please refer to Material::Type enum.

**See also** setMaterialType().

----

.. _api_Material_9e8ad132:

 void **Material::setDoubleSided** (bool  *flag*)

Enables or disables the double-sided *flag* for the material.

**See also** doubleSided().

----

.. _api_Material_d15a9b0e:

 void **Material::setLightModel** (int  *model*)

Sets a new light *model* for the material. For more detalse please refer to Material::LightModelType enum.

**See also** lightModel().

----

.. _api_Material_e1f2738a:

 void **Material::setMaterialType** (int  *type*)

Sets new material *type*. For more detalse please refer to Material::Type enum.

**See also** materialType().

----

.. _api_Material_b7f9406e:

 void **Material::setPriority** (int  *priority*)

Sets a rendering *priority* for the material. This parameter is used alpha rendering sorting

----

.. _api_Material_6fe7c145:

 void **Material::setWireframe** (bool  *wireframe*)

Enables or disables a *wireframe* mode for the material.

**See also** *wireframe*().

----

.. _api_Material_cf41a703:

 int **Material::uniformSize** () const

Returns size uniform buffer for single instance. This value can be used as stride for instances.

----

.. _api_Material_e0c186a7:

 bool **Material::wireframe** () const

Returns true if material must be rendered as wireframe.

**See also** setWireframe().


