.. _api_Texture:

Texture
=======

Inherited: None

.. _api_Texture_description:

Description
-----------

This class can be used to handle texture resource or create them at runtime.



.. _api_Texture_public:

Public Methods
--------------

+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`addSurface<api_Texture_ac792b81>` (const Texture::Surface & surface)        |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`depth<api_Texture_1ed27890>` () const                                       |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`depthBits<api_Texture_b18ed63a>` () const                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`filtering<api_Texture_c6853014>` () const                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`flags<api_Texture_04fde293>` () const                                       |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`format<api_Texture_4b8e7d59>` () const                                      |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`getPixel<api_Texture_cfb962d8>` (int  x, int  y, int  level) const          |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                       ByteArray | :ref:`getPixels<api_Texture_536710bc>` (int  level) const                         |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`height<api_Texture_67129ebc>` () const                                      |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            bool | :ref:`isArray<api_Texture_b39f207e>` () const                                     |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            bool | :ref:`isCubemap<api_Texture_3c07f51d>` () const                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            bool | :ref:`isFeedback<api_Texture_a634c52b>` () const                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            bool | :ref:`isRender<api_Texture_e48069ad>` () const                                    |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`mipCount<api_Texture_f750a612>` () const                                    |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`readPixels<api_Texture_72c5ea94>` (int  x, int  y, int  width, int  height) |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`resize<api_Texture_c562f98b>` (int  width, int  height)                     |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setCompress<api_Texture_0d861cf3>` (int  method)                            |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setDepth<api_Texture_ce08bd13>` (int  depth)                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setDepthBits<api_Texture_1b2e94d7>` (int  depth)                            |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setDirty<api_Texture_4d267c1e>` ()                                          |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setFiltering<api_Texture_ae306128>` (int  type)                             |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setFlags<api_Texture_ac14760f>` (int  flags)                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setFormat<api_Texture_402763b9>` (int  type)                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setHeight<api_Texture_290ab8d3>` (int  height)                              |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setWidth<api_Texture_ac7f1e46>` (int  width)                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setWrap<api_Texture_d6cb8531>` (int  type)                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`sides<api_Texture_8df5021e>` () const                                       |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|  :ref:`Texture::Surface<api_Texture_Surface>` & | :ref:`surface<api_Texture_a492d7eb>` (int  side)                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`width<api_Texture_1250c467>` () const                                       |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`wrap<api_Texture_17643cda>` () const                                        |
+-------------------------------------------------+-----------------------------------------------------------------------------------+

.. _api_Texture_enums:

Public Enums
------------

.. _api_Texture_FilteringType:

**enum Texture::FilteringType**

+--------------------+-------+---------------------------------------------------------------------------------+
|           Constant | Value | Description                                                                     |
+--------------------+-------+---------------------------------------------------------------------------------+
|      Texture::None | 0     | Texture samples draw as is.                                                     |
+--------------------+-------+---------------------------------------------------------------------------------+
|  Texture::Bilinear | 1     | Texture samples are averaged.                                                   |
+--------------------+-------+---------------------------------------------------------------------------------+
| Texture::Trilinear | 2     | Texture samples are averaged and also interpolated from adjacent mipmap levels. |
+--------------------+-------+---------------------------------------------------------------------------------+

.. _api_Texture_Flags:

**enum Texture::Flags**

+-------------------+--------+---------------------------------------------------------+
|          Constant | Value  | Description                                             |
+-------------------+--------+---------------------------------------------------------+
|   Texture::Render | (1<<0) | This texture is used as render target in frame buffers. |
+-------------------+--------+---------------------------------------------------------+
| Texture::Feedback | (1<<1) | The feedback textures can read data from GPU to CPU.    |
+-------------------+--------+---------------------------------------------------------+

.. _api_Texture_FormatType:

**enum Texture::FormatType**

+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|                Constant | Value | Description                                                                                                                              |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|             Texture::R8 | 0     | Single channel(Red) texture. 8-bit integer                                                                                               |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|           Texture::RGB8 | 1     | Color texture format. 8 bit integer per channel. 24-bits in total.                                                                       |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|          Texture::RGBA8 | 2     | Color texture format with alpha channel. 8-bit integer per channel. 32-bits in total.                                                    |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|        Texture::RGB10A2 | 3     | 10 bits each for RGB, 2 for Alpha.                                                                                                       |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
| Texture::R11G11B10Float | 4     | This uses special 11 and 10-bit floating-point values. This is very economical for floating-point values (using only 32-bits per value). |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|    Texture::RGBA32Float | 5     | Color texture and alpha with floating-point values. It uses 32-bit floating-point values per channel.                                    |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|    Texture::RGBA16Float | 6     | Color texture and alpha with floating-point values. It uses 16-bit floating-point values per channel.                                    |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|          Texture::Depth | 7     | Depth buffer texture format. Number bits per pixel depend on graphical settings and hardware. Can be 16, 24 or 32-bit per pixel.         |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+

.. _api_Texture_WrapType:

**enum Texture::WrapType**

Wrap mode for textures.

+-------------------+-------+--------------------------------------------------------------------------------------------+
|          Constant | Value | Description                                                                                |
+-------------------+-------+--------------------------------------------------------------------------------------------+
|    Texture::Clamp | 0     | Clamps the texture to the last pixel at the edge.                                          |
+-------------------+-------+--------------------------------------------------------------------------------------------+
|   Texture::Repeat | 1     | Tiles the texture, creating a repeating pattern.                                           |
+-------------------+-------+--------------------------------------------------------------------------------------------+
| Texture::Mirrored | 2     | Tiles the texture, creating a repeating pattern by mirroring it at every integer boundary. |
+-------------------+-------+--------------------------------------------------------------------------------------------+



.. _api_Texture_static:

Static Methods
--------------

+-----------+------------------------------------------------+
|  uint32_t | :ref:`maxCubemapSize<api_Texture_754b01f3>` () |
+-----------+------------------------------------------------+
|  uint32_t | :ref:`maxTextureSize<api_Texture_53c8071b>` () |
+-----------+------------------------------------------------+

.. _api_Texture_methods:

Methods Description
-------------------

.. _api_Texture_ac792b81:

 void **Texture::addSurface** (:ref:`Texture::Surface<api_Texture_Surface>` & *surface*)

Adds *surface* to the texture. Each texture must contain at least one surface.

----

.. _api_Texture_1ed27890:

 int **Texture::depth** () const

Returns depth dimension for the texture.

**See also** setDepth().

----

.. _api_Texture_b18ed63a:

 int **Texture::depthBits** () const

Returns the number of depth buffer bits.


**Note:** This value is valid only for the depth textures.


**See also** setDepthBits().

----

.. _api_Texture_c6853014:

 int **Texture::filtering** () const

Returns filtering type of texture. For more details please see the Texture::FilteringType enum.

**See also** setFiltering().

----

.. _api_Texture_04fde293:

 int **Texture::flags** () const

Returns service flags for the texture.

**See also** setFlags() and Texture::Flags.

----

.. _api_Texture_4b8e7d59:

 int **Texture::format** () const

Returns format type of texture. For more details please see the Texture::FormatType enum.

**See also** setFormat().

----

.. _api_Texture_cfb962d8:

 int **Texture::getPixel** (int  *x*, int  *y*, int  *level*) const

Returns pixel color from mip *level* at *x* and *y* position as RGBA integer for example 0x00ff00ff which can be mapped to (0, 255, 0, 255)

----

.. _api_Texture_536710bc:

 ByteArray **Texture::getPixels** (int  *level*) const

Returns texture data from a mip level.

----

.. _api_Texture_67129ebc:

 int **Texture::height** () const

Returns height for the texture.

**See also** setHeight().

----

.. _api_Texture_b39f207e:

 bool **Texture::isArray** () const

Returns true if texture provides a set of textures; otherwise returns false.


**Note:** For now will always return false.


----

.. _api_Texture_3c07f51d:

 bool **Texture::isCubemap** () const

Returns true if the texture is a cube map; otherwise returns false.

----

.. _api_Texture_a634c52b:

 bool **Texture::isFeedback** () const

Returns true if texture marked as a feed back texture; otherwise returns false. The feedback textures can read data from GPU to CPU.

----

.. _api_Texture_e48069ad:

 bool **Texture::isRender** () const

Returns true if texture is can be attached to framebuffer; otherwise returns false.

----

.. _api_Texture_754b01f3:

 uint32_t **Texture::maxCubemapSize** ()

Returns the maximum cubemap size.

----

.. _api_Texture_53c8071b:

 uint32_t **Texture::maxTextureSize** ()

Returns the maximum texure size.

----

.. _api_Texture_f750a612:

 int **Texture::mipCount** () const

Returns the number of MIP levels.

----

.. _api_Texture_72c5ea94:

 void **Texture::readPixels** (int  *x*, int  *y*, int  *width*, int  *height*)

Read pixels from GPU at *x* and *y* position with *width* and *height* dimensions into texture data.

----

.. _api_Texture_c562f98b:

 void **Texture::resize** (int  *width*, int  *height*)

Sets new *width* and *height* for the texture.

----

.. _api_Texture_0d861cf3:

 void **Texture::setCompress** (int  *method*)

Set the compression method.

----

.. _api_Texture_ce08bd13:

 void **Texture::setDepth** (int  *depth*)

Sets new *depth* dimension for the texture.

**See also** depth().

----

.. _api_Texture_1b2e94d7:

 void **Texture::setDepthBits** (int  *depth*)

Sets the number of *depth* buffer bits.


**Note:** This value is valid only for the *depth* textures.


**See also** depthBits().

----

.. _api_Texture_4d267c1e:

 void **Texture::setDirty** ()

Marks texture as dirty. That means this texture must be forcefully reloaded.

----

.. _api_Texture_ae306128:

 void **Texture::setFiltering** (int  *type*)

Sets filtering *type* of texture. For more details please see the Texture::FilteringType enum.

**See also** filtering().

----

.. _api_Texture_ac14760f:

 void **Texture::setFlags** (int  *flags*)

Sets service *flags* for the texture.

**See also** flags() and Texture::Flags.

----

.. _api_Texture_402763b9:

 void **Texture::setFormat** (int  *type*)

Sets format *type* of texture. For more details please see the Texture::FormatType enum.

**See also** format().

----

.. _api_Texture_290ab8d3:

 void **Texture::setHeight** (int  *height*)

Sets new *height* for the texture.

**See also** height().

----

.. _api_Texture_ac7f1e46:

 void **Texture::setWidth** (int  *width*)

Sets new *width* for the texture.

**See also** width().

----

.. _api_Texture_d6cb8531:

 void **Texture::setWrap** (int  *type*)

Sets the *type* of warp policy. For more details please see the Texture::WrapType enum.

**See also** wrap().

----

.. _api_Texture_8df5021e:

 int **Texture::sides** () const

Returns the number of texture sides. In most cases returns 1 but for the cube map will return 6

----

.. _api_Texture_a492d7eb:

 :ref:`Texture::Surface<api_Texture::Surface>` & **Texture::surface** (int  *side*)

Returns a surface for the provided side. Each texture must contain at least one surface. Commonly used to set surfaces for the cube maps.

----

.. _api_Texture_1250c467:

 int **Texture::width** () const

Returns width for the texture.

**See also** setWidth().

----

.. _api_Texture_17643cda:

 int **Texture::wrap** () const

Returns the type of warp policy. For more details please see the Texture::WrapType enum.

**See also** setWrap().


