.. _api_RenderTexture:
RenderTexture Class
================

Inherited: :ref:`Texture<api_Texture>`

.. _api_RenderTexture_description:
Description
-----------



.. _api_RenderTexture_public:
Public Methods
--------------

+-----------------------+-----------------------------------------------------------------------------+
|   :ref:`int<api_int>` | :ref:`depth<api_RenderTexture_depth>` () const                              |
+-----------------------+-----------------------------------------------------------------------------+
| :ref:`void<api_void>` | :ref:`resize<api_RenderTexture_resize>` (int  width, int  height)           |
+-----------------------+-----------------------------------------------------------------------------+
| :ref:`void<api_void>` | :ref:`setDepth<api_RenderTexture_setDepth>` (int  bits)                     |
+-----------------------+-----------------------------------------------------------------------------+
| :ref:`void<api_void>` | :ref:`setFixed<api_RenderTexture_setFixed>` (bool  fixed)                   |
+-----------------------+-----------------------------------------------------------------------------+
| :ref:`void<api_void>` | :ref:`setTarget<api_RenderTexture_setTarget>` (Texture::FormatType  format) |
+-----------------------+-----------------------------------------------------------------------------+



.. _api_RenderTexture_static:
Static Methods
--------------

None

.. _api_RenderTexture_methods:
Methods Description
-------------------

.. _api_RenderTexture_depth:

:ref:`int<api_int>`  **RenderTexture::depth** () const

Returns the precision of the render texture's depth buffer in bits.

**See also** setDepth().

----

.. _api_RenderTexture_resize:

:ref:`void<api_void>`  **RenderTexture::resize** (:ref:`int<api_int>`  *width*, :ref:`int<api_int>`  *height*)

Changes current size of the render texture with new *width*, *height* and sets resource state to ResourceState::ToBeUpdated.

----

.. _api_RenderTexture_setDepth:

:ref:`void<api_void>`  **RenderTexture::setDepth** (:ref:`int<api_int>`  *bits*)

Sets the precision of the render texture's depth buffer in *bits*.

**See also** depth().

----

.. _api_RenderTexture_setFixed:

:ref:`void<api_void>`  **RenderTexture::setFixed** (:ref:`bool<api_bool>`  *fixed*)

Sets the *fixed* flag for the render texture. If true the resize() method will not take effect.

----

.. _api_RenderTexture_setTarget:

:ref:`void<api_void>`  **RenderTexture::setTarget** (:ref:`Texture::FormatType<api_Texture::FormatType>`  *format*)

Sets the new *format* type for the texture and sets resource state to ResourceState::ToBeUpdated. For more details please see the Texture::FormatType enum.

----


